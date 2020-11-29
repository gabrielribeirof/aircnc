require('dotenv/config');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { resolve } = require('path');

const routes = require('./routes');

class App {
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
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
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

module.exports = new App().server;
