const db = require("../../data/db.config");

const validateID = async (req, res, next) => {
  try {
    const existing = await db("recipes")
      .where("recipe_id", req.params.id)
      .first();
    if (!existing) {
      next({
        status: 404,
        message: `the recipe_id ${req.params.id} does not exist`,
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateID,
};
