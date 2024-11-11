const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
  },
  workType:{
    type: String,
    enum: ['Student', 'Teacher', 'Admin']
  }
});

// Ensure unique index on email field
personSchema.index({ email: 1 });

// Create the Person Model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;