const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
