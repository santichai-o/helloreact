

import express from 'express'
import httpProxy from 'http-proxy'
import ssr from './ssr'

const HOST = '127.0.0.1'
const PORT = 8080
const app = express()
const targetUrl = 'http://127.0.0.1:5000'
const proxy = httpProxy.createProxyServer({
  // API Server ของเราอยู่ที่ port 5000 ไงหละ
  target: targetUrl,
  changeOrigin: true
})

// ถ้า path ที่เข้ามาขึ้นต้นด้วย /api ให้เรียกไปที่ http://127.0.0.1:5000/api
app.use('/api/v1', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");

  proxy.web(req, res, { target: `${targetUrl}/api/v1` });
})

app.use(ssr)

// server
let server = app.listen(PORT, HOST , (error) => {
  let host = server.address().address;
  let port = server.address().port;
  
  console.log('==> Listening on port http://%s:%s', host, port)
})