const express = require('express');
const app = express();
require('dotenv').config();
const env = process.env;
const connectDB = require('./db');
connectDB();
app.listen(env.PORT, (re, res) => {
  console.log(`Server is running on port ${env.PORT}`);
});
app.listen(100, (re, res) => {
  console.log(`Server is running on port 100`);
});
