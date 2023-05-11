const express = require("express");
const db = require('../data/db.config');
const server = express();

server.use(express.json());

server.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await db('recipes')
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({
      message: err.message,
      customMessage: "not able to fetch your recipes",
    });
  }
});

module.exports = server;
