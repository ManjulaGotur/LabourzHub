const mongoose = require('mongoose');


const serviceProviderSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  profilePicture: {
    type: String
  },
  servicesOffered: [{
    type: String,
    ref: 'Service'
  }],
  kycDocuments: [{
    type: String,
    ref: 'KYCDocument'
  }],
  availability: {
    days: {
      type: String,
      required: true
    },
    timeSlots: {
      type: [String],
      required: true
    }
  },
  certifications: {
    type: [String]
  },
  performanceMetrics: {
    type: Map,
    of: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema,'serviceprovider');

module.exports = ServiceProvider;
