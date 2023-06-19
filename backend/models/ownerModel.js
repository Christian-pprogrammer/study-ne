const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  ownerNames: {
    type: String,
    required: true
  },
  ownerNID: {
    type: String,
    required: true,
    unique: true
  },
  ownerPhone: {
    type: String,
    required: true
  },
  ownerAddress: {
    type: String,
    required: true
  }
})

const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;