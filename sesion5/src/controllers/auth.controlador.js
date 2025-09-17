const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { pool } = require('../utilidades/mysql');

exports.registro = async (req,res,next)=>{
    try {
        const { email, password} = req.body||{};
        if (!email||!password) return res.status(400).json({mensaje:'email y password requeridos'});
        //buscar correos electronicos ya existentes
        const [rows] = await pool.query('select id from usuarios where email=?', [email]);
        //validacion de correo ya registrado
        if(rows.length) return res.status(409).json({mensaje:'email ya registrado'});
        //
        const hash = await bcrypt.hash(password, 10);
        console.log("contrasena hash", hash);
        const [result] = await pool.query('insert into usuarios (email,password) values(?,?)', [email,hash] );
        res.status(201).json({ id: result.insertId,email});
    } catch (e) { next(e);}

};



