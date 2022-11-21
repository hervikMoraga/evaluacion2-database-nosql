const express = require("express");
const routes = express.Router();

// ROUTES
routes.get('/', async (req, res) => {
    try {
        res.render( "index")
    } catch (error) {
        console.log("Ha ocurrido un error => ",error)
    }
})

routes.get('/estudiantes', async (req, res) => {
    try {
        res.render( "estudiantes")
    } catch (error) {
        console.log("Ha ocurrido un error => ",error)
    }
})



module.exports = routes;