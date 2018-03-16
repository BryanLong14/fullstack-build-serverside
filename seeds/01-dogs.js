const dogs = require('../data/dogs-seed-data')
exports.seed = async function(knex, Promise) {
  await knex('dog').del()
  await knex('dog').insert(dogs)
};
