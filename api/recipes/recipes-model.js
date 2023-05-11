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
      "ri.ingredient_id",
    //   "i.ingredient_name",
      "quantity"
    )
    .orderBy("s.step_number")

    /*
    select 
 r.*, step_id, step_number, step_instructions
 from recipes as r
 left join steps as s
     on r.recipe_id = s.recipe_id
 where r.recipe_id = 3
 
 
 order by step_number
     */

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  console.log("say something", rows);

  rows.forEach((row) => {
    result.steps.push({
      step_id: row.step_id,
      step_number: row.step_number,
      step_instructions: row.step_instructions,
      ingredients: [],
    });
  });

  return result;
}

module.exports = {
  Get,
  GetById,
};
