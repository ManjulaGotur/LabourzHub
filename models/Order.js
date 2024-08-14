const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    unique: true,
    required: true
  },
  customerId: {
    type: String,
    ref: 'Customer',
    required: true
  },
  serviceId: {
    type: String,
    ref: 'Service',
    required: true
  },
  serviceProviderId: {
    type: String,
    ref: 'ServiceProvider',
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'Canceled'],
    default: 'Pending'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'PayPal', 'Cash'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Unpaid', 'Refunded'],
    default: 'Unpaid'
  },
  deliveryAddress: {
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
    }
  },
  serviceDetails: {
    serviceType: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema,'order');

module.exports = Order;
