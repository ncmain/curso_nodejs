//Mostrar informacion desde un archivo ejemplo index.js
const express = require("express");//nos conectamos con express 
const fs = require("fs");
//middleware: es un puente como un filtro
const multer = require("multer"); //sirve para validad la subida de archivos
const path = require("path");

const app = express();
const PORT = 3000;
//se utiliza dos atributos destination y filename
app.use(express.json()); //podemos devolver json
const  storage = multer.diskStorage({//siempre nos va mandar para almacenar  pede ser AWS , en este caso en local
    destination:(req, file, cb) =>{
        cb(null, "bdjson")
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))//es un formato unico agradable
    }
});

const upload = multer({storage:storage});//se puede poner unicamente storage y es valido si clave ;valor es igual

app.get("/usuarios",(req,res)=>{
    try {
        const  data = fs.readFileSync("bdjson/usuarios.json")
        const usuarios = JSON.parse(data);
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            error: "Error al leer el archivo"
        })
    }

})

app.post("/subir-json", upload.single("archivo"), (req, res) => {
    if (!req.file) {
        res.status(400).json({
            error: "No se ha subido ningún archivo"
        });
    } else {
        res.json({
            mensaje: "Archivo subido correctamente",
            nombreArchivo: req.file.originalname
        });
    }
});


app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})