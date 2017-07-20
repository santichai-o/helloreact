import express from 'express'
//import { graphql } from 'graphql'
import bodyParser from 'body-parser'
import GraphHTTP from 'express-graphql'

import schema from './schema'

let app  = express()
let HOST = '127.0.0.1'
let PORT = 5000

app.use('/graphql', GraphHTTP({
  schema: schema,
  pretty: true,
  graphiql: true
}))

let server = app.listen(PORT, HOST , function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port)
})