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

        // console.log("Estudiante creado: ",estudianteDB)
        res.redirect('/')
    } catch (error) {
        console.log("Ha ocurrido un error al crear un estudiante")
    }
})


// EDITAR ESTUDIANTE
// routes.get('/:id', async(req,res) =>{
//     const id = req.params.id
//     try {
        
//         const estudianteDB = await Estudiante.findOne({_id:id})
//         console.log(estudianteDB)

//         res.render('detalle',{
//             estudiante: estudianteDB,
//             error:false
//         })

//     } catch (error) {
//         console.log("Ha ocurrido un error al obtener el estudiante")
//         res.render('detalle',{
//             error:true,
//             msge: "No se encuentra el id seleccionado"
//         })
//     }
// })



// ELIMINAR ESTUDIANTE
routes.delete( '/:id', async (req,res) =>{
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


// OBTENER INF DE ESTUDIANTE ESPECIFICO
routes.get( '/:id', async (req,res) =>{
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