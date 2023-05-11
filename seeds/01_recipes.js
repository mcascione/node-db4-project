/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").truncate();
  await knex("recipes").insert([
    { recipe_name: "pb&j", created_at: "2021-01-01 08:23:19.120"},
    { recipe_name: "grilled cheese", created_at: '2023-03-05 03:21:00.000' },
    { recipe_name: "instant ramen", created_at: '2022-12-15 11:45:03.367' },
  ]);
};
