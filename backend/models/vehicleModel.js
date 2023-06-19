const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  chasisNumber: {
    type: String,
    required: true,
    unique: true
  },
  manufacturer: {
    type: String,
    required: true,
    unique: true
  },
  manufactureYear: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  plateNumber: {
    type: String,
    unique: true
  },
  modelName: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;