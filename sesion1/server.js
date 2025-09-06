const http = require('http');
const PORT = process.env.PORT || 3000; // 👈 Render asigna el puerto en process.env.PORT

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo');
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
