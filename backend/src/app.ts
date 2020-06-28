import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { resolve } from 'path';

import routes from './routes';

class App {
  server: Express;

  constructor() {
    this.server = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));

    this.server.use('/files', express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    mongoose.connect(
      process.env.MONGOOSE_SRV,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
    );
  }
}

export default new App().server;
