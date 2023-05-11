const db = require('../../data/db.config');

function Get(){
    return db('recipes as r')
}

async function GetById(recipe_id){
    const rows = await db('recipes as r')
     .where('r.recipe_id', recipe_id)
     .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
     .select('r.*', 'step_id', 'step_number', 'step_instructions')
     .orderBy('step_number')
     .groupBy('r.recipe_id')

    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        steps: []
    }

    rows.forEach(row => {
        result.steps.push({
            step_id: row.step_id,
            step_number: row.step_number,
            step_instructions: row.step_instructions,
        })
    });

    return result;
}

module.exports = {
    Get, 
    GetById
};