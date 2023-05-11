const express = require("express");
const router = express.Router();
const Recipe = require("./recipes-model");

router.get("/", (req, res, next) => {
  Recipe.Get()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

// router.getByID("/api/recipes/:id", async (req, res) => {
//   try {
//     const recipe = await db("recipes").where("recipe_id", req.params.id);
//     res.status(200).json(recipe);
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//       customMessage: "not able to fetch your recipes",
//     });
//   }
// });

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "something went wrong in the recipes router",
  });
});

module.exports = router;
