import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
// npm i --save-dev @types/cors
// npm i --save-dev @types/express

const app : Application = express();

//using cors
app.use(cors());



app.get('/', (req : Request, res : Response, next : NextFunction) => {
    res.send('Be a mongooes!');
    next();
  })

  export default app;