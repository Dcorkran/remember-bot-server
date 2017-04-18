const knex = require('./knex');

module.exports = {
  getDescriptionByName:function(reqName){
    return knex('name')
    .where('name',reqName);
  }
}
