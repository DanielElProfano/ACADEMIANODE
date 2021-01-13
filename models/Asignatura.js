const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Subject = new Schema({
    name: {
        type: String,
        required: true
    },
    alumnos: {
        type: mongoose.Types.ObjectId,
        ref: 'Alumno',
    }
})