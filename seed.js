require('dotenv').config();
const mongoose = require('mongoose');
const { User, Thought } = require('./models');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const users = [
  {
    username: 'gerald',
    email: 'gerald@gmail.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'mynameisjeff',
    email: 'jeff@gmail.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'marcel20!',
    email: 'marcel20@gmail.com',
    thoughts: [],
    friends: [],
  },
];

const thoughts = [
  {
    thoughtText: 'I been thinking',
    username: 'mynameisjeff',
    reactions: [],
  },
  {
    thoughtText: 'Whoa I also been thinkin',
    username: 'gerald',
    reactions: [],
  },
  {
    thoughtText: 'Need a new idea for a painting...',
    username: 'marcel20!',
    reactions: [],
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.log('Database seeded!');
  process.exit(0);
};

seedDB().catch(err => {
  console.error('Seeding error:', err);
  process.exit(1);
});