const db = require('../../data/db.config');

function Get(){
    return db('recipes')
}

function GetById(recipe_id){
    return db('recipes').where('recipe_id', recipe_id).first()
}

module.exports = {
    Get, 
    GetById
};