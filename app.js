require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();


app.use(bodyParser.urlencoded({extended:false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


// CONEXION A BASE DE DATOS
// const USERNAME = process.env.USER_NAME
// const PASS = process.env.PASSW
// const DB_NAME = process.env.DB_NAME
const USERNAME = "userEv2"
const PASS = "I58ZfpIZEkJI3PXb"
const DB_NAME = "universidad"
const URI = `mongodb+srv://${USERNAME}:${PASS}@cluster0.ymuxfkp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect( URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => console.log("Conexión establecida con MongoDB"))
  .catch(e => console.log(e))
  


// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


// MIDDLEWARES
app.use(express.static(__dirname + '/public'))

app.use('/', require('./routes/Routes'))
app.use('/estudiantes', require('./routes/Estudiantes'))

app.use((req, res, next) =>{
  res.status(404).render(__dirname+"/views/404")
})

// SERVIDOR EN ESCUCHA
app.listen(process.env.PORT || 4000, () =>{
  console.log("Servidor a su servicio en el puerto: ", PORT)
})

