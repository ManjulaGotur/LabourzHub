const mongoose = require('mongoose')


const CustomerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },

},{
    timestamps:true,
})


const Customer = mongoose.model('Customer',CustomerSchema,'customer')
module.exports = Customer ;