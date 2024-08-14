const express = require('express');
const router = express.Router();
const serviceProviderController = require('../controllers/serviceProviderController');

// Route to create a service provider
router.post('/', serviceProviderController.createServiceProvider);

// Route to get all service providers
router.get('/', serviceProviderController.getAllServiceProviders);

// Route to get a single service provider by ID
router.get('/:id', serviceProviderController.getServiceProviderById);

// Route to update a service provider by ID
router.put('/:id', serviceProviderController.updateServiceProvider);

// Route to delete a service provider by ID
router.delete('/:id', serviceProviderController.deleteServiceProvider);

module.exports = router;
