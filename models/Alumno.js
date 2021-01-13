const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
     {
        name: {
                type: String,
                required: true
            },
        lastName: {
                type: String,
                required: true
        },
        mail: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        },
        photo: {
                type: String,
                
        },
        age: {
            type: Number,
            min:14,
            max: 65
        },
        rol: {
            type: String,
            // enum: ['alumno']
        },
        signatures: {
            type: mongoose.Types.ObjectId,
            ref: 'asignaturas'

        }
        
    },
    { timestamps: true }

);

const Alumno = mongoose.model('alumnos', alumnoSchema); 
module.exports = Alumno;