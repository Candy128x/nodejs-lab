//  Import Required Module
var http = require('http');


// Create Server
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Developer :] logg:111');
}).listen(8081);


console.log('Hello Developer, Server Running at http://127.0.0.1:8081/');


/*
## First Appication in NodeJS

Q: the components of a Node.js application. 
A: A Node.js application consists of the following three important components:
I) Import required modules:
    We use the require directive to load Node.js modules.
II) Create server:
    A server which will listen to client's requests similar to Apache HTTP Server.
III) Read request and return response:
    The server created in an earlier step will read the HTTP request made by the 
    client which can be a browser or a console and return the response.


---
- Execute file
$ node first_appication.js
Hit in browser: http://127.0.0.1:8081/
op:
Hello Developer :] logg:111


*/