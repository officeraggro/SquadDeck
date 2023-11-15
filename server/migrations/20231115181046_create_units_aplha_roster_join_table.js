/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.createTable('units_alpha_roster', table => {
        table.increments('id')
        table
            .integer('unit_id')
            .references('id')
            .inTable('units')
            .onDelete('cascade')
        table
            .integer('alpha_roster_id')
            .references('id')
            .inTable('alpha_roster')
            .onDelete('cascade')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTableIfExists('units_alpha_roster')
  
};
