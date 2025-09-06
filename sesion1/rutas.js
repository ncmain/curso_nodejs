const http = require('http');
//const getMenu = require('./menu');
const server = http.createServer((req, res)=>{
    let content ='';
    if(req.url=='/'){
        content = '<h1>Hola</h1>'
        res.writeHead(200,{'Content-Type': 'text/html'});
    } else if(req.url==='/sesion1'){
        content = '<h1>Bienvenido a la sesion 1</h1>';
        res.writeHead(200, {'Content-Type': 'text/html'});
    } else {
        content = '<h1>404 no encontramos informacion</h1>';
        res.writeHead(404,{'Content-Type': 'text/html'});
    }
    res.end(content);
})

server.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto 3000');
})