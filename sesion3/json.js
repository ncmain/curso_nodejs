const fs = require("fs");
const usuarios = [
    {nombre: "Ana", edad: 22, skills: ["HTML","CSS"]},
    {nombre: "Luis", edad: 32, skills: ["Java","Python"]},
    {nombre: "Maria", edad: 45, skills: ["Docker","Net"]}
]

fs.writeFileSync("src/primerejemplo.json", JSON.stringify(usuarios))
fs.writeFileSync("src/primerejemploformateado.json", JSON.stringify(usuarios,null,2))
fs.writeFileSync("src/primerejemploformateado2.json", JSON.stringify(usuarios,["nombre"],2),"utf-8")
fs.writeFileSync("src/primerejemploformateado3.json", JSON.stringify(usuarios,["nombre", "skills"],2))