import mongoose from 'mongoose';
import app from './app';

const port : number = 5000;



//! db connection
async function bootstrap() {
    
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log(`Db connection succesfull`);

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })

  } catch (error) {
    console.log(error);
  }
  }
bootstrap ();


