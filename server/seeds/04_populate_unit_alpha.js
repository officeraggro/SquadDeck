/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('units').del()
  await knex('units').insert([
    {unit_full_name: '', unit_abbr: '', unit_parent: '', unit_emblem_url: '', unit_station: ''},
    {unit_full_name: '', unit_abbr: '', unit_parent: '', unit_emblem_url: '', unit_station: ''},
    {unit_full_name: '', unit_abbr: '', unit_parent: '', unit_emblem_url: '', unit_station: ''}
  ]);
};
