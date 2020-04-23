const express = require('express');
const cors = require('cors');
const http = require('http');
const { resolve } = require('path');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/files', express.static(resolve(__dirname, "..", "tmp", "uploads")))

server.listen(3333);