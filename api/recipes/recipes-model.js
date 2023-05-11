const db = require('../../data/db.config');

function Get(){
    return db('recipes')
}

module.exports = {
    Get
};