const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const kycDocumentRoutes = require('./routes/kycdocumentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const serviceProviderRoutes = require('./routes/serviceProviderRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

const db =require('./db')

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/kycdocuments', kycDocumentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/serviceProviders', serviceProviderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
