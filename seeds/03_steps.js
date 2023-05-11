/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("steps").truncate();
  await knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "Spread peanut butter on one slice of bread.",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "Spread jam on another slice of bread.",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "Put the slices of bread together and enjoy.",
      recipe_id: 1,
    },
    {
      step_number: 1,
      step_instructions:
        "Heat pan on medium-low heat and heat up 1 tbsp of butter.",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions:
        "Put one slice of bread on pan with two slices of cheese. Top with another slice of bread.",
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_instructions:
        "Cook on medium-low for about 5 minutes or until the slice touching the pan is golden brown. Then, add another 1 tbsp of butter and flip the bread over.",
      recipe_id: 2,
    },
    {
      step_number: 4,
      step_instructions:
        "Once the second slice of bread is golden brown, remove the sandwich from the pan and let cool for 3-5 minutes. Enjoy.",
      recipe_id: 2,
    },
    {
      step_number: 1,
      step_instructions:
        "Bring about 2 cups of water to boil in a small pot over high heat.",
      recipe_id: 3,
    },
    {
      step_number: 2,
      step_instructions:
        "Lower the heat to medium and add dry ramen noodles to pot along with seasoning packet",
      recipe_id: 3,
    },
    {
      step_number: 3,
      step_instructions:
        "Gently simmer the noodles until chewy but not soft. Remove and place in a bowl with fresh cilantro.",
      recipe_id: 3,
    },
    {
      step_number: 4,
      step_instructions:
        "Enjoy with chopsticks carefully, as the ramen will be very hot!",
      recipe_id: 3,
    },
  ]);
};
