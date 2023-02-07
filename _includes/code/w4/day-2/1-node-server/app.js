const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('<h1>Hello!</h1>')
    response.end()
  }
  if (request.url === '/about') {
    response.write('<h1>About page!</h1>')
    response.end()
  }
})
// 127.0.0.1:3000
server.listen(5555)
