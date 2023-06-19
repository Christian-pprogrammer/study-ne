const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../models/userModel")


exports.createUser = async (req,res) => {
  try{
    const newUser = req.body;
    const encryptedPass = await bcrypt.hash(req.body.password, 10);
    newUser.password = encryptedPass;
    const created = await User.create(newUser);
    res.status(200).json({message: 'signup successful'});
  }catch(err) {
    res.status(400).json({
      message: err.message
    })
  }
}

exports.loginUser = async (req,res) => {
  try{
    const existingUser = await User.findOne({email: req.body.email});
    if(!existingUser) {
      return res.status(401).json({
        message: 'incorrect username or password'
      })
    }
    const validPass = await bcrypt.compare(req.body.password, existingUser.password);
    if(!validPass) {
      return res.status(401).json({
        message: 'incorrect username or password'
      })
    }
    console.log(existingUser)
    const token = jwt.sign(existingUser.toJSON(), process.env.JWT_KEY);
    delete existingUser.password;
    return res.status(200).json({
      user: existingUser,
      token: token
    })

  }catch(err) {
    res.status(400).json({
      message: err.message
    })
  }
}