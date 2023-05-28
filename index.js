const app = require('./app');//creando el protocolo de transferencia
//para crear nuestro propio servidor http
const http = require('http');
const server = http.createServer(app);

server.listen(3000,()=>{
    console.log('El servidor esta corriendo')
})

