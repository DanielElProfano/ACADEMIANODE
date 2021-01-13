const express = require('express');
require('./db'); // llamamos a la conexión con la base de datos;

const PORT = 3000;
const server = express();

const router = express.Router();

server.use('/', router);

router.get('/alumno', (req, res, next) => {
    return res.status(200).send('pag alumnos');
});
router.get('/profesor', (req, res, next) => {
    return res.status(200).send('pag profesores');
})
router.get('/aula', (req, res, next) => {
    return res.status(200).send('pag aula');
})


server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})


