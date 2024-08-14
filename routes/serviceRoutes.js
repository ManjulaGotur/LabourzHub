const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Create a new service
router.post('/', serviceController.createService);

// Get all services
router.get('/', serviceController.getServices);

// Get a service by ID
router.get('/:id', serviceController.getServiceById);

// Update a service by ID
router.put('/:id', serviceController.updateService);

// Delete a service by ID
router.delete('/:id', serviceController.deleteService);

module.exports = router;
