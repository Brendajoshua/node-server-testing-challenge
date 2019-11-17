const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const ProjectRouter = require("./projects/project-router");
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Projects Server!' });
});

module.exports = server;