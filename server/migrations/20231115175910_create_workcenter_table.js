/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.createTable('workcenters', table => {
        table.increments('id')
        table.string('workcenter_name', 255).notNullable()
        table.string('workcenter_parent', 255).notNullable()
        table.string('workcenter_abbr', 255).notNullable()
        table.string('workcenter_emblem_url')
        table
            .integer('workcenter_unit_id')
            .references('id')
            .inTable('units')
            .onDelete('cascade')

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTableIfExists('workcenters')
  
};
