const ServiceProvider = require('../models/serviceProvider');

// Create a new service provider
exports.createServiceProvider = async (req, res) => {
  try {
    const serviceProvider = new ServiceProvider(req.body);
    await serviceProvider.save();
    res.status(201).json(serviceProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all service providers
exports.getAllServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find().populate('servicesOffered').populate('kycDocuments');
    res.status(200).json(serviceProviders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single service provider by ID
exports.getServiceProviderById = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findById(req.params.id).populate('servicesOffered').populate('kycDocuments');
    if (!serviceProvider) {
      return res.status(404).json({ message: 'ServiceProvider not found' });
    }
    res.status(200).json(serviceProvider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a service provider by ID
exports.updateServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!serviceProvider) {
      return res.status(404).json({ message: 'ServiceProvider not found' });
    }
    res.status(200).json(serviceProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a service provider by ID
exports.deleteServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findByIdAndDelete(req.params.id);
    if (!serviceProvider) {
      return res.status(404).json({ message: 'ServiceProvider not found' });
    }
    res.status(200).json({ message: 'ServiceProvider deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
