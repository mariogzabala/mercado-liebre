
//requerimos el modulo express//
const express = require('express');
//crear la variable "router" que guarda la ejecucion del metodo Router de express//
const router = express.Router();


//importamos el archivo "Controllers" y lo guaramos en una variable//
const homeControllers = require('./../controllers/homeControllers.js');

router.get('/', homeControllers.home);


module.exports = router;




