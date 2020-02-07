// p52の違う書き方

const http = require('http')

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World!</h1>')
    res.write('<p>test</p>')
    res.end()
  })
  .listen(8081)
