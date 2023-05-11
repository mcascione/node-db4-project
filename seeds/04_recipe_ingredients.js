/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe_ingredients').truncate()
  await knex('recipe_ingredients').insert([
    {ingredient_id: 1, recipe_id: 1, step_id: 1, quantity: 1},   
    {ingredient_id: 3, recipe_id: 1, step_id: 1, quantity: 1},
    {ingredient_id: 2, recipe_id: 1, step_id: 2, quantity: 1},
    {ingredient_id: 3, recipe_id: 1, step_id: 2, quantity: 1},
    {ingredient_id: 4, recipe_id: 2, step_id: 4, quantity: 1},
    {ingredient_id: 3, recipe_id: 2, step_id: 5, quantity: 2},
    {ingredient_id: 5, recipe_id: 2, step_id: 5, quantity: 2},
    {ingredient_id: 4, recipe_id: 2, step_id: 6, quantity: 1},
    {ingredient_id: 6, recipe_id: 3, step_id: 8, quantity: 2},
    {ingredient_id: 7, recipe_id: 3, step_id: 9, quantity: 1},
    {ingredient_id: 8, recipe_id: 3, step_id: 10, quantity: 0.25},
  ]);
};
