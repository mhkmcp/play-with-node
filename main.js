const { write } = require('fs');
var http = require('http');
var URL = require('url');

var server = http.createServer(function (request, response) {
    // response.end("Humayun Kabir"
    var myUrl = "http://rabbil.com/blog.html?year=2020&month=july";
    var myUrlObj = URL.parse(myUrl, true);

    var myHostName = myUrlObj.host;
    var myPathName = myUrlObj.pathname;
    var mySearchName = myUrlObj.search;

    response.writeHead(200, { 'Content-Type': 'text/html' })

    response.write(myHostName + "</br>");
    response.write(myPathName + "</br>");
    response.write(mySearchName + "</br>");


    response.end();


    // if (request.url == "/") {
    //     response.writeHead(200, { 'Content-Type': 'text/html' })
    //     response.write('<h1>This is Homepage</h1>')
    //     response.end()
    // }
    // else if (request.url == "/about") {
    //     response.writeHead(200, { 'Content-Type': 'text/html' })
    //     response.write('<h1>This is About page</h1>')
    //     response.end()
    // }
    // else if (request.url == "/contact") {
    //     response.writeHead(200, { 'Content-Type': 'text/html' })
    //     response.write('<h1>This is Contact page</h1>')
    //     response.end()
    // }
})
server.listen(5000)
console.log('Server Running Successfully!');