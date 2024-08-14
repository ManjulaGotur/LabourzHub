const express = require('express');
const router = express.Router();
const kycDocumentController = require('../controllers/kycdocumentController');

// Create a new KYC document
router.post('/', kycDocumentController.createKYC);

// Get all KYC documents
router.get('/', kycDocumentController.getKYCDocuments);

// Get a KYC document by ID
router.get('/:id', kycDocumentController.getKYCById);

// Update a KYC document by ID
router.put('/:id', kycDocumentController.updateKYC);

// Delete a KYC document by ID
router.delete('/:id', kycDocumentController.deleteKYC);

module.exports = router;
