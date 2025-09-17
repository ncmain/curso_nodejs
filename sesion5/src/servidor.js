require('dotenv').config();

const express=require('express');
const cors=require('cors');
const morgan=require('morgan'); //visualizacion de logs

const app=express();
const PUERTO=process.env.PUERTO||3003;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', require('./rutas/index.rutas'));
app.use('/auth', require('./rutas/auth.rutas'));
app.use('/api/tareas', require('./rutas/tareas.rutas'));
app.use(require('./middlewares/noEncontrado'));

