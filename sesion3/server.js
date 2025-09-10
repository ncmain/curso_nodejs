//Nuestro objeto
const usuario = {
    //clave :valor
    nombre: "juan",//string o cadena
    edad: 45, //number
    activo: true, //booleano
    skills: ["javascript", "Java","NodeJs"],//array arreglo siempre va en plural
    direccion: {
        ciudad: "Lima",
        pais: "Peru"
    }
}

console.log(usuario);
const jsonString = JSON.stringify(usuario); //para convertir a un json string
console.log("json string", jsonString);

const jsonObjeto = JSON.parse(jsonString); //parsearlo es convertirlo a objeto
console.log("json convertido a objeto", jsonObjeto);

//Acceder a los valores del objeto
console.log("nombre",jsonObjeto.nombre);
//para sacar atributo de un arreglo objeto
console.log("",jsonObjeto.skills[0]);

for (const skills of jsonObjeto.skills){
    console.log("habilidades", skills);
}
//sacar el valor de un objeto
console.log("ciudad", jsonObjeto.direccion.ciudad);
console.log("ciudad", jsonObjeto.direccion.pais);
