
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('name').del()
    .then(function () {
      // Inserts seed entries
      return knex('name').insert([
        {id: 1, name: 'Dillon', description: 'Cool guy'},
        {id: 2, name: 'Dylan', description: 'Cool guy'},
        {id: 3, name: 'Dillion', description: 'Cool guy'}
      ]);
    });
};
