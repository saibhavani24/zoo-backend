const express = require('express');
const controller = require('../controller');

const router = express.Router();
router.post('/add', controller.animal.addAnimal);
module.exports = router;