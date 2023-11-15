/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('personnel_details', table => {
        table.increments('id')
        table.string('favorite_movie', 255)
        table.specificType('hobbies', 'text[]')
        table.specificType('achievements', 'text[]')
        table.string('spouse_name', 255)
        table.integer('children_num')
        table.specificType('children_names', 'text[]')
        table.string('personal_img')
        table.string('grade_emblem_img')
        table.specificType('achievement_imgs', 'text[]')
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
