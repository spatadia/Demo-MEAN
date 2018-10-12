const mongoose = require ('mongoose');
const infoSchema = mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipc: { type: String, required: true }
});

module.exports = mongoose.model('Info', infoSchema);
