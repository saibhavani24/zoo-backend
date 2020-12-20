const express = require('express');
const controller = require('../controller');

const router = express.Router();
router.get('/add', controller.animal.addAnimal);
router.post('/add', controller.animal.addAnimal);
router.delete('/add', controller.animal.addAnimal);
router.put('/add', controller.animal.addAnimal);

module.exports = router;