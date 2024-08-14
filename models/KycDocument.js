const mongoose = require('mongoose');


const kycDocumentSchema = new mongoose.Schema({
  documentType: {
    type: String,
    required: true
  },
  documentNumber: {
    type: String,
    required: true
  },
  documentImage: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  issuedDate: {
    type: Date,
    required: true
  },
  expiryDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  serviceProviderId: {
    type: String,
    required: true
  },
  verifiedBy: {
    type: String
  },
  verificationNotes: {
    type: String
  },
  documentStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
});

const KYCDocument = mongoose.model('KYCDocument', kycDocumentSchema);

module.exports = KYCDocument;
