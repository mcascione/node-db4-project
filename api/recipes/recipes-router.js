const express = require("express");
const router = express.Router();
const { validateID } = require('../recipes/recipes-middleware');
const Recipe = require("./recipes-model");

router.get("/", (req, res, next) => {
  Recipe.Get()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

router.get("/:id", validateID, (req, res, next) => {
  Recipe.GetById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(next)
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "something went wrong in the recipes router",
  });
});

module.exports = router;
