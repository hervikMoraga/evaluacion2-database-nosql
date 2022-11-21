const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const estudianteSchema = new Schema({
    nombre: String,
    fecha_nacimiento: Date,
    carrera: String
})

// CREATE MODEL
const Estudiante = mongoose.model('Estudiante', estudianteSchema)

module.exports = Estudiante