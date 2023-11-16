/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('personnel_details', table => {
        table.increments('id')
        table
          .integer("alpha_roster_id")
          .references("id")
          .inTable("alpha_roster")
          .onDelete("cascade");
        table.string('favorite_movie', 255)
        table.string('hobbies', 255)
        table.string('achievements', 255)
        table.string('spouse_name', 255)
        table.integer('children_num')
        table.string('children_names', 255)
        table.string('personal_img')
        table.string('grade_emblem_img')
        table.string('achievement_imgs', 255)
        table.string('interesting_fact')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('personnel_details')
  
};
