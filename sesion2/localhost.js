const express = require('express');
const app = express();
const PORT = 3000;
let json ={
    nombre: 'Adrian',
    edad: 18,
    esProgramador: true,
    lenguajes: ['js','java','c#'],
    frameworks:{
        fronted:'Angular',
        backend:'Express'
    }
}

app.get('/', (req ,res)=>{
    res.send('hola desde express');
})

app.get('/sesion2', (req, res)=>{
    res.send('Bienvenido a la sesion2');
})

app.post('/sesion4',(req, res)=>{
    const body = req.body;
    console.log(body);
    res.send('ok,recibimos tus datos')
})
app.listen(PORT, () =>{
    console.log('servidor escuchando en puerto 3000')
})