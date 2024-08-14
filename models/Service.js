const mongoose = require('mongoose');


const serviceSchema = new  mongoose.Schema({
  serviceId: {
    type: String,
    unique: true,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    address: {
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
    },
    serviceArea: {
      type: String
    }
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  serviceCategory: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  serviceDuration: {
    type: String,
    required: true
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

const Service = mongoose.model('Service', serviceSchema,'service');

module.exports = Service;
