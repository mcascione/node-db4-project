const express = require("express");

const server = express();

server.use(express.json());



server.get('/api/recipes', (req, res) => {
    res.send('Recipes go here!')
})

module.exports = server;
