var fs = require('fs')
var http = require('http')

var server = http.createServer(function (request, response) {
    if (request.url == '/') {

        // async write 
        // fs.writeFile('demo.txt', 'Hello Humayun', function (error) {
        //     if (error) {
        //         response.writeHead(200, { 'Content-Type': 'text/html' })
        //         response.write("File Write Failed!")
        //         response.end()

        //     } else {
        //         response.writeHead(200, { 'Content-Type': 'text/html' })
        //         response.write("File Write Succeded!")
        //         response.end()
        //     }
        // })

        // sync write 
        let error = fs.writeFileSync('demo.txt', 'Welcome Humayun');

        if (error) {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write("File Write Failed!")
            response.end()

        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write("File Write Succeded!")
            response.end()
        }


        // async read
        // fs.readFile('home.html', function (error, data) {
        //     response.writeHead(200, { 'Content-Type': 'text/html' })
        //     response.write(data)
        //     response.end()

        // })

        // sync read
        // let myData = fs.readFileSync('home.html');
        // response.writeHead(200, { 'Content-Type': 'text/html' })
        // response.write(myData)
        // response.end()
    }
})
server.listen(5050)
console.log('Running...')