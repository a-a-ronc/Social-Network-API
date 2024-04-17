// database.js

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connect() {
    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
        const db = client.db(dbName);
        // Perform operations on the database
        // For example, insert a document into a collection
        const collection = db.collection('myCollection');
        await collection.insertOne({ key: 'value' });
        console.log('Document inserted successfully');
    } catch (error) {
        console.error('Error connecting to the MongoDB server:', error);
    }
}

// Disconnect from the MongoDB server
async function disconnect() {
    try {
        await client.close();
        console.log('Disconnected from the MongoDB server');
    } catch (error) {
        console.error('Error disconnecting from the MongoDB server:', error);
    }
}

module.exports = { connect, disconnect };
