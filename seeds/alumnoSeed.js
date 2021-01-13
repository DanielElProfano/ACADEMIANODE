const mongoose = require('mongoose');
const Alumno = require('../models/Alumno');
DB_URL = require ('../db');
const alumnos = [
    {
        name: "Juan",
        lastName: "González",
        mail: "arriba@abajo.com",
        password: "1234",
        photo: "",
        age: 15,
        rol: 'alumno',
        signatures:"mongo"
        
    },
    {
        name: "Africa",
        lastName: "González",
        mail: "arriba@abajo.com",
        password: "1234",
        photo: "",
        age: 18,
        rol: 'alumno',
        signatures:"React"
        
    }]

    // const alumnoDocuments = alumnos.map(alumno = new Alumno(alumno));
    mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
   .then(async () => {
        console.log('conectado');
          // Utilizando Pet.find() obtendremos un array con todos los pets de la db
      const allAlumnos = await Alumno.find(); 
          
          // Si existen pets previamente, dropearemos la colección
      if (allAlumnos.length) {
        await Alumno.collection.drop();
      }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
         
        
          await Alumno.insertMany(alumnos);
      })
    .catch((err) => console.log(`Error creating data: ${err}`))
      // Por último nos desconectaremos de la DB.
    .finally(() => mongoose.disconnect());

