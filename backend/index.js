const connect = require('./connection');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const express = require('express');
const router = require('./router');

connect();

const app = express();

app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})