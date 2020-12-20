const express = require('express');
const {auth: {me, register, login} } = require('../controller'); // object destructuring

const router = express.Router();
router.post('/signup', register);
router.get('/me', me);

router.post('/login', login)
module.exports = router;