const express = require("express");
const routes = express.Router();


const Estudiante = require('../models/estudiante')

// ROUTES

routes.get('/', async (req, res) => {
    try {
        res.render( "index")
    } catch (error) {
        console.log("Ha ocurrido un error => ",error)
    }
})

// OBTENER TODOS LOS ESTUDIANTES
routes.get('/estudiantes', async (req, res) => {
    try {
        const arrayEstudiantesDB = await Estudiante.find()
        res.render( "estudiantes", { arrayEstudiantes: arrayEstudiantesDB })
    } catch (error) {
        console.log("Ha ocurrido un error => ",error)
    }
})

// CREAR ESTUDIANTE LISTO
routes.post('/estudiantes', async(req, res) =>{
    const body = req.body
    try {
        const estudianteDB = new Estudiante(body)
        await estudianteDB.save()

        // console.log("Estudiante creado: ",estudianteDB)
        res.redirect('/estudiantes')
    } catch (error) {
        console.log("Ha ocurrido un error al crear un estudiante")
    }
})


// EDITAR ESTUDIANTE
routes.put('/estudiantes/:id', async(req,res) =>{

console.log("LLEGOOOOOO");

    const id = req.params.id
    const body = req.body
    try {
        // const estudianteDB = await Estudiante.findByIdAndUpdate(id, body );
        const estudianteDB = await Estudiante.findByIdAndUpdate(id, body, {useFindAndModify: false} );
        console.log(estudianteDB)

        res.json({
            estudiante: estudianteDB,
            estado:true,
            msge: "Editado!"
        })


    } catch (error) {
        console.log("Ha ocurrido un error al editar el estudiante")
        res.json({
            estado:false,
            msge: "Error"
        })
    }
})


// ELIMINAR ESTUDIANTE LISTO
routes.delete( '/estudiantes/:id', async (req,res) =>{
    const id = req.params.id
    try {
        const estudianteDB = await Estudiante.findByIdAndDelete({_id:id})
        
        if(!estudianteDB){
            res.json({
                estado: false,
                msge: "No se puede eliminar el estudiante"
            })

        }else{
            res.json({
                estado:true,
                msge: "Estudiante eliminado!"
            })
        }
    } catch (error) {
        console.log("Error al eliminar", error)
    }
})


// OBTENER INF DE ESTUDIANTE ESPECIFICO LISTO
routes.get( '/estudiantes/:id', async (req,res) =>{
    const id = req.params.id
    try {
        const estudianteDB = await Estudiante.findById({_id:id})
        
        if(!estudianteDB){
            res.json({
                estado: false,
                msge: "Estudiante no encontrado"
            })

        }else{
            res.json({
                estado:true,
                estudiante: estudianteDB,
                msge: "Estudiante encontrado!"
            })
        }
    } catch (error) {
        console.log("Error al obtener estudiante", error)
    }
})


  module.exports = routes;