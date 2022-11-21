const express = require("express");
const routes = express.Router();

// ROUTES
routes.get('/',  (req, res) => {
    try {
        res.render( "index")
    } catch (error) {
        console.log("Ha ocurrido un error => ",error)
    }
})





module.exports = routes;