const knex = require('./knex');

module.exports = {
  getDescriptionByName:function(reqName){
    return knex('name')
    .where('name',reqName);
  },
  addNewName:function(name,description){
    return knex('name').insert({
      name,
      description
    });
  },
  updateDescription:function(name,description){
    return knex('name')
      .where('name',name)
      .update({
        description
      });
  }
}
