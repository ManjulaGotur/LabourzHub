const KYCDocument = require('../models/kycdocument');

// Create a new KYC document
exports.createKYC = async (req, res) => {
  try {
    const kycDocument = new KYCDocument(req.body);
    await kycDocument.save();
    res.status(201).json(kycDocument);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all KYC documents
exports.getKYCDocuments = async (req, res) => {
  try {
    const kycDocuments = await KYCDocument.find();
    res.status(200).json(kycDocuments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a KYC document by ID
exports.getKYCById = async (req, res) => {
  try {
    const kycDocument = await KYCDocument.findById(req.params.id);
    if (!kycDocument) {
      return res.status(404).json({ error: 'KYC Document not found' });
    }
    res.status(200).json(kycDocument);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a KYC document by ID
exports.updateKYC = async (req, res) => {
  try {
    const kycDocument = await KYCDocument.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!kycDocument) {
      return res.status(404).json({ error: 'KYC Document not found' });
    }
    res.status(200).json(kycDocument);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a KYC document by ID
exports.deleteKYC = async (req, res) => {
  try {
    const kycDocument = await KYCDocument.findByIdAndDelete(req.params.id);
    if (!kycDocument) {
      return res.status(404).json({ error: 'KYC Document not found' });
    }
    res.status(200).json({ message: 'KYC Document deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
