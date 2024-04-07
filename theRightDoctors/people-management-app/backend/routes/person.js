const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// GET all people
router.get('/person', personController.getAllPeople);

// GET single person by ID
router.get('/person/:id', personController.getPersonById);

// POST create a new person
router.post('/person', personController.createPerson);

// PUT update a person by ID
router.put('/person/:id', personController.updatePerson);

// DELETE a person by ID
router.delete('/person/:id', personController.deletePerson);

module.exports = router;
