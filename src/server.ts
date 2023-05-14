const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

//! db connection
async function bootstrap() {
    
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log(`Db connection succesfull`);
  } catch (error) {
    console.log(error);
  }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
bootstrap ();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})