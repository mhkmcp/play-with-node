var fs = require('fs')
var http = require('http')

var server = http.createServer(function (request, response) {
    if (request.url == '/') {
        // async rename 
        // fs.rename('demo.txt', 'demoNew.txt', function (error) {
        //     if (error) {
        //         response.writeHead(200, { 'Content-Type': 'text/html' })
        //         response.write("File Rename Failed!")
        //         response.end()

        //     } else {
        //         response.writeHead(200, { 'Content-Type': 'text/html' })
        //         response.write("File Rename Succeded!")
        //         response.end()
        //     }
        // })

        // sync rename 
        let error = fs.renameSync('demoNew.txt', 'demo.txt');

        if (error) {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write("File Rename Failed!")
            response.end()

        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write("File Rename Succeded!")
            response.end()
        }

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
        // let error = fs.writeFileSync('demo.txt', 'Welcome Humayun');

        // if (error) {
        //     response.writeHead(200, { 'Content-Type': 'text/html' })
        //     response.write("File Write Failed!")
        //     response.end()

        // } else {
        //     response.writeHead(200, { 'Content-Type': 'text/html' })
        //     response.write("File Write Succeded!")
        //     response.end()
        // }


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