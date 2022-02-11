const loginControllers = require('./../controllers/loginControllers');

const express = require('express');
const router = express.Router();

router.get('/login', loginControllers.login);

module.exports = router;