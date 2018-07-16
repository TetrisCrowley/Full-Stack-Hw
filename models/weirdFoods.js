

const mongoose = require('mongoose');

const weirdFoodSchema = new mongoose.Schema({
  name: String,
  countryOfOrigin: String,
  description: String,
  legal: Boolean
});

module.exports = mongoose.model('WeirdFood', weirdFoodSchema);