var http = require('http');

var server = http.createServer(function (request, response) {
    // response.end("Humayun Kabir")
    if (request.url == "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>This is Homepage</h1>')
        response.end()
    }
    else if (request.url == "/about") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>This is About page</h1>')
        response.end()
    }
    else if (request.url == "/contact") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>This is Contact page</h1>')
        response.end()
    }
})
server.listen(5000)
console.log('Server Running Successfully!');