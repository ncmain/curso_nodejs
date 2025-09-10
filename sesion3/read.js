//Lo importante aqui es como manejar la informacion que nos llegue. leer un archivo
const fs = require('fs');

try { //en java se dicen metodos en node funciones
    const data = fs.readFileSync("src/primerejemplo.json", "utf-8");
    const usuarios = JSON.parse(data);
    usuarios.forEach((element, index) => {
        console.log("usuario", index + 1 + ":"+ element.nombre);
    });
} catch (error) {
    console.error("error leyendo el archivo", error);
}