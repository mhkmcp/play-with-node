var fs = require('fs')
var http = require('http')

var server = http.createServer(function (request, response) {
    if (request.url == '/') {
        // async
        fs.readFile('home.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(data)
            response.end()

        })
    }
})
server.listen(5050)
console.log('Running...')