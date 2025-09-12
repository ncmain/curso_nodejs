const { error } = require("console");
const e = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Bienvenido a clase 4 mini app");
})
//endpoints listar usuarios
//get
app.get("/usuarios",(req,res)=>{
    try {
        const data = fs.readFileSync(path.join(__dirname, "src/usuarios.json"), "utf-8");
        const usuarios = JSON.parse(data);
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({error:"Error al leer usuarios"})
    }
})

//ejemplo de busqueda
app.get("/usuarios/:nombre", (req,res)=>{
    const nombre = req.params.nombre;
    const data = fs.readFileSync(path.join(__dirname, "src/usuarios.json"), "utf-8");
    const usuarios = JSON.parse(data);

    const usuario = usuarios.find(e => e.nombre.toLowerCase() === nombre.toLowerCase())
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(400).json({error: `usuario ${nombre} no encontrado`});
    }
})

//agregar usuarios
app.post("/usuarios", (req,res)=>{
    const nuevoUsuario = req.body;
    if (!nuevoUsuario.nombre || !nuevoUsuario.dni) {
        res.status(400).json({
            error: "faltan datos"
        })
    }

    const data = fs.readFileSync(path.join(__dirname, "src/usuarios.json"), "utf-8");
    const usuarios = JSON.parse(data);
    const usuario = usuarios.find(e => e.dni === nuevoUsuario.dni)
    if(usuario){
        return res.status(400).json(
            {error: `El usuario ${nuevoUsuario.nombre} ya existe en el sistema`}
        )
    } else {
    usuarios.push(nuevoUsuario);
    fs.writeFileSync(path.join(__dirname, "src/usuarios.json"), JSON.stringify(usuarios,null,2), "utf-8")
    res.json({
        mensaje: "usuario creado exitosamente",
        usuario: nuevoUsuario
    })
    }
})
//Eliminar usuario
app.delete("/usuarios/:dni", (req,res)=>{
    const dni = req.params.dni;
    const data = fs.readFileSync(path.join(__dirname, "src/usuarios.json"), "utf-8")
    const usuarios = JSON.parse(data);

    const usuarioIndex = usuarios.findIndex(e => e.dni == dni)
    if (usuarioIndex === -1) {
        console.log(usuarioIndex)
        res.status(404).json(
            {
                error: `usuario con el ${dni} no se encuentra`
            }
        )
        
    } else {
        const usuarioEliminado = usuarios.splice(usuarioIndex,1);

        fs.writeFileSync(path.join(__dirname, "src/usuarios.json"), JSON.stringify(usuarios,null,2), "utf-8")
        res.json({
        mensaje: "usuario eliminado exitosamente",
        usuario: usuarioEliminado
        })
        
    }
})
app.listen(PORT,()=>{
    console.log("Iniciando el el puerto 3000")
})