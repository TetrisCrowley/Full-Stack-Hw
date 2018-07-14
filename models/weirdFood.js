

const mongoose = require('mongoose');

const weirdFoodSchema = new weirdFood.Schema({
  Name: String,
  CountryOfOrigin: String,
  Description: String,
  Legal: Boolean
});

module.exports = mongoose.model('WeirdFood', weirdFoodSchema);