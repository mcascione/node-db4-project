/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").truncate();
  await knex("ingredients").insert([
    { ingredient_name: "peanut butter" },
    { ingredient_name: "grape jam" },
    { ingredient_name: "whole wheat bread" },
    { ingredient_name: "butter" },
    { ingredient_name: "cheddar cheese" },
    { ingredient_name: "water" },
    { ingredient_name: "instant ramen" },
    { ingredient_name: "cilantro" },
  ]);
};
