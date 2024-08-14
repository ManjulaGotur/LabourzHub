const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    customerId: {
        type: String,
        ref: 'Customer',  // Reference to the Customer model
        required: true
    },
    serviceId: {
        type: String,
        ref: 'Service',  // Reference to the Service model
        required: true
    },
    serviceProviderId: {
        type: String,
        ref: 'ServiceProvider', 
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        default: ''
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // },
    moderationStatus: {
        type: String,
        enum: ['Pending', 'Approved', 'Flagged'],
        required: true,
        default: 'Pending'
    }
},{
        timestamps:true,  
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
