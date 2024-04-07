const express = require('express');
const router = express.Router();

// Import specific route files
const userRoutes = require('./usersRoutes'); // Assumes you have this file set up
const thoughtRoutes = require('./thoughtsRoutes'); // Assumes you have this file set up

// Use the imported routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;