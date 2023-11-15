/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('email', 255).notNullable()
        table.string('uname', 255).notNullable()
        table.string('user_id', 255).notNullable()
        table.string('user_profile_img', 255).notNullable()
        table.string('unit_abbr', 255).notNullable()
        table.string('role', 255).notNullable()
        table
          .integer("user_unit_id")
          .references("id")
          .inTable("units")
          .onDelete("cascade");

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  
};
