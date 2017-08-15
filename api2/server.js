import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import browserSync from 'browser-sync'
import es6Renderer from 'express-es6-template-engine'
import GraphHTTP from 'express-graphql'
import passport from 'passport'

import models from './models'
import jwtStrategy from './jwt/jwtStrategy'
import schema from './graphql/schema'
import { getIndex, getLogin, portLogin } from './handler/login'

const isDev = process.env.NODE_ENV === 'dev'
const HOST = '127.0.0.1'
const PORT = 5000
const app  = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// My SQL
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// passport
passport.use(jwtStrategy)
app.use(passport.initialize())
app.use(passport.session())

// request

app.use(express.static(path.join( __dirname, 'public/assets')))

app.engine('html', es6Renderer)
app.set('views', 'api2/public/views')
app.set('view engine', 'html')

// test 
app.get('/test', (req, res) => {
   models.User.findById(1)
  .then((val) => {
    res.send(val)
  })
  .catch(function(err) {
    res.send('error : ' + err.message)
  }) 
})

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

const server = app.listen(PORT, HOST, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`GraphQL listening at  http://${host}:${port}`);

  if(isDev) {
    browserSync({
      files: [ path.join(__dirname, 'public/**/*.{html,js,css}') ],
      online: false,
      open: false,
      port: PORT + 1,
      proxy: `${HOST}:${PORT}`,
      ui: false
    })
  }
})