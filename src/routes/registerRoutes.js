const registerControllers = require('./../controllers/registerControllers');

const express = require('express');
const router = express.Router();

router.get('/register', registerControllers.register);

module.exports = router;