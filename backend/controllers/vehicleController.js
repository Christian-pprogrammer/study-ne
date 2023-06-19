const Owner = require("../models/ownerModel");
const Vehicle = require("../models/vehicleModel");

exports.createVehicle = async (req,res) => {
  try{
    const newVehicle = req.body;
    const created = await Vehicle.create(newVehicle);
    res.status(200).json({message: 'vehicle registration successful'});
  }catch(err) {
    res.status(400).json({
      message: err.message
    })
  }
}

exports.linkVehicleToOwner = async (req,res) => {
  try{
    const owner = await Owner.findOne({ownerNID: req.body.ownerNID});
    if(!owner) {
      return res.status(400).json({
        message: 'Owner does not exist'
      })
    }
    const vehicle = await Vehicle.findOne({chasisNumber: req.body.chasisNumber});
    if(!vehicle) {
      return res.status(400).json({
        message: 'Vehicle does not exist'
      })
    }
    vehicle.owner = owner._id;
    vehicle.plateNumber = req.body.plateNumber;
    await vehicle.save();
    res.status(200).json({message: 'linking vehicle to owner successful'});
  }catch(err) {
    res.status(400).json({
      message: err.message
    })
  }
}

exports.getAllVehicles = async (req,res) => {
  try{
    const vehicles = await Vehicle.find();
    res.status(200).json({
      vehicles: vehicles
    })
  }catch(err) {
    return res.status(400).json({
      message: 'Unable to fetch vehicles'
    })
  }
}