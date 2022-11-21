const express = require("express");
const app = express();
const port = 3000


// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


// ROUTES
app.get('/', (req, res) =>{
  res.render("index", {titulo : "Titulo dinamico"})
})



app.get('/services', (req, res) =>{
  res.send("Servicios")
})


// MIDDLEWARES
app.use(express.static(__dirname + '/public'))
app.use((req, res, next) =>{
  res.status(404).render(__dirname+"/views/404")
})


app.listen(port, () =>{
  console.log("Servidor a su servicio en el puerto: ", port)
})

