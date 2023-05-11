const db = require("../../data/db.config");

function Get() {
  return db("recipes as r");
}

async function GetById(recipe_id) {
  const rows = await db("recipes as r")
    .where("r.recipe_id", recipe_id)
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("recipe_ingredients as ri", "ri.step_id", "s.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "ri.ingredient_id")
    .select(
      "r.*",
      "s.step_id",
      "s.step_number",
      "s.step_instructions",
      "i.ingredient_id",
      "i.ingredient_name",
      "quantity"
    )
    .orderBy("s.step_number");

  const iRows = await db("recipe_ingredients as ri")
    .leftJoin("ingredients as i", "ri.ingredient_id", "i.ingredient_id")
    .select("ri.ingredient_id", "i.ingredient_name", "quantity", "ri.step_id")
    .where("ri.recipe_id", recipe_id);

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  rows.forEach((row) => {
    const step = {
      step_id: row.step_id,
      step_number: row.step_number,
      step_instructions: row.step_instructions,
      ingredients: [],
    };

    result.steps.push(step);

    for (let i = 0; i < result.steps.length; i++) {
        if (iRows[i] && row.step_id === iRows[i].step_id) {
          step.ingredients.push({
            ingredient_id: iRows[i].ingredient_id,
            ingredient_name: iRows[i].ingredient_name,
            quantity: iRows[i].quantity,
          });
        }
      }
  });

  return result;
}

module.exports = {
  Get,
  GetById,
};
