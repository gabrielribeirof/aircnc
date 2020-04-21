const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

app.use(express.json());

server.listen(3333);