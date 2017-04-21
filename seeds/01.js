
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "name"; ALTER SEQUENCE name_id_seq RESTART WITH 6')
    .then(function () {
      // Inserts seed entries
      return knex('name').insert([
        {id: 1, name: 'Dillon', description: 'Cool guy'},
        {id: 2, name: 'Dylan', description: 'Cool guy'},
        {id: 3, name: 'Dillion', description: 'Cool guy'},
        {id: 4, name: 'Cole', description: 'Cole is a really cool guy'},
        {id: 5, name: 'James', description: 'James is really good at Career Services but not Cornhole'}
      ]);
    });
};
