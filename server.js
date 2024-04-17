require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database connection setup
const uri = process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to my social network API');
});

// Register routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`🌍 Connected on localhost:${PORT}`);
});

// Graceful shutdown - close MongoDB connection when the app exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
  });
});
