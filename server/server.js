import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
const app = express();
import Student from './models/Student.js';
const DATABASE =
  'mongodb+srv://MithinNP:zwY1ZbZEmv7C31nl@cluster0.xq6sa.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0';
const port = 4000;
app.use(cors());
app.use(express.json());
async function connectDB(params) {
  try {
    const data = await mongoose.connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db is connected successfully');
  } catch (err) {
    console.log(err);
  }
}
connectDB();

app.get('/students', async (req, res) => {
  console.log('mithin');
  const users = await Student.find();
  console.log(users);
  res.status(200).json({
    status: 'success',
    length: users.length,
    data: {
      users: users,
    },
  });
});

app.listen(port, 'localhost', (err) => {
  console.log('server is connected to port' + port);
});
