import express from 'express'
//import { graphql } from 'graphql'
import bodyParser from 'body-parser'
import es6Renderer from 'express-es6-template-engine'
import GraphHTTP from 'express-graphql'
import passport from 'passport'

import jwtStrategy from './jwt/jwtStrategy'
import schema from './graphql/schema'
import { getIndex, getLogin, portLogin } from './handler/login'

let app  = express()
let HOST = '127.0.0.1'
let PORT = 5000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// passport
passport.use(jwtStrategy)
app.use(passport.initialize())
app.use(passport.session())

// request
app.engine('html', es6Renderer)
app.set('views', 'api2/public/views')
app.set('view engine', 'html')

app.get('/api/v1', getIndex)

app.get('/api/v1/login', getLogin)

app.post("/api/v1/login", portLogin)

// graphql
app.post(
  '/api/v1', 
  passport.authenticate('jwt', { session: false }), 
  GraphHTTP( 
    (request) => ({
      schema: schema,
      pretty: true,
      graphiql: true,
      context: request.session
    })
  )
)

// server
let server = app.listen(PORT, HOST , function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port)
})