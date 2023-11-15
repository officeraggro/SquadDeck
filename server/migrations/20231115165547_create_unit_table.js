/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.createTable('units', table => {
    table.increments('id')
    table.string('unit_full_name', 255).notNullable()
    table.string('unit_abbr', 255).notNullable()
    table.string('unit_parent', 255).notNullable()
    table.string('unit_emblem_url').notNullable()
    table.string('unit_station', 255).notNullable()

  }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTableIfExists('units')
  
};
