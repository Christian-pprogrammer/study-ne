const express = require('express');
const { getAllVehicles, createVehicle, linkVehicleToOwner } = require('./controllers/vehicleController');
const { createUser, loginUser } = require('./controllers/userController');
const { auth } = require('./middlewares/auth');
const { createOwner } = require('./controllers/ownerController');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/vehicles', auth, getAllVehicles);
router.post('/vehicles', auth, createVehicle);
router.post('/owners', auth, createOwner);
router.patch('/link-vehicle-owner', auth, linkVehicleToOwner);


module.exports = router;