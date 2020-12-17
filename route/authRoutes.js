const express = require('express');
const controller = require('../controller');

const router = express.Router();
router.post('/signup', controller.auth.register);
router.post('/login', controller.auth.login)
module.exports = router;