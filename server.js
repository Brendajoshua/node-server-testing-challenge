const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('logger');

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'Projects Server!' });
});

module.exports = server;