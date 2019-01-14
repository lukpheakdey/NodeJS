var htpp = require('http');
var module1 = require('./basics/module1');
var module2 = require('./basics/module2');
var fs = require('fs');

function onRequestRenderingHTML(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./basics/RenderingHTML/index.html', null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
    
}

// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write(module1.myString);
//     response.write(module2.myVariable);
//     response.end();
// }


htpp.createServer(onRequestRenderingHTML).listen(8000);
//htpp.createServer(onRequest).listen(8000);


var msg = 'Hello World12';
console.log(msg);