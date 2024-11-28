//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
async function connectDB() {
  console.log(process.env.DATABASE);
  console.log('jkkhhjghfgijkj');
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
// async function connectDB(params) {
//   try {
//     const data = await mongoose.connect(DATABASE, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('db is connected successfully');
//   } catch (err) {
//     console.log(err);
//   }
// }

export default connectDB;
