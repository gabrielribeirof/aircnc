const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const morgan = require('morgan');
const { resolve } = require('path');

const app = express();
const server = http.Server(app);

mongoose.connect(
  'mongodb+srv://access:TgPuvSxTfJunpAXT@maincluster-jtmlc.gcp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(require('./routes'));

app.use('/files', express.static(resolve(__dirname, "..", "tmp", "uploads")))

server.listen(3333);