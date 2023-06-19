const mongoose = require('mongoose');

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('db connection successful...')
  }catch(err) {
    console.log(err.message);
  }
}

module.exports = connect;

module.exports = connect;