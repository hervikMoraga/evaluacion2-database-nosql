const express = require("express");
const routes = express.Router();


const Estudiante = require('../models/estudiante')

// ROUTES

// OBTENER TODOS LOS ESTUDIANTES
routes.get('/', async (req, res) => {
    try {
        const arrayEstudiantesDB = await Estudiante.find()
        res.render( "index", { arrayEstudiantes: arrayEstudiantesDB })
    } catch (error) {
        console.log("Ha ocurrido un error => ",error)
    }
})

// CREAR ESTUDIANTE
routes.post('/', async(req, res) =>{
    const body = req.body
    try {
        const estudianteDB = new Estudiante(body)
        await estudianteDB.save()

        console.log("Estudiante creado: ",estudianteDB)
        res.redirect('/')
    } catch (error) {
        console.log("Ha ocurrido un error al crear un estudiante")
    }
})


// ELIMINAR ESTUDIANTE



// EDITAR ESTUDIANTE



// OBTENER INF DE ESTUDIANTE ESPECIFICO



  module.exports = routes;