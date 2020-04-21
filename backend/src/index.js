const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());

server.listen(3333);