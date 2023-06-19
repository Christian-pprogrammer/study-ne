const Owner = require("../models/ownerModel");

exports.createOwner = async (req,res) => {
  try{
    const newOwner = req.body;
    const created = await Owner.create(newOwner);
    res.status(200).json({message: 'owner registration successful'});
  }catch(err) {
    res.status(400).json({
      message: err.message
    })
  }
}