const mongoose = require('mongoose');

require('dotenv').config();

async function connectDB() {
  try {
    const data = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDB;
