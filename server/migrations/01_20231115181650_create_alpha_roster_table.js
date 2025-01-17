/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('alpha_roster', table => {
        table.increments('id')
        table.string('full_name', 255)
        table.string('grade', 255)
        table.string('record_status', 255)
        table.string('assigned_pas', 255)
        table.string('assigned_pas_cleartext', 255)
        table.string('office_symbol', 255)
        table.string('duty_title', 255)
        table.string('duty_start_date')
        table.string('dor')
        table.string('dafsc', 255)
        table.string('cafsc', 255)
        table.string('pafsc', 255)
        table.string('two_afsc', 255)
        table.string('three_afsc', 255)
        table.string('four_afsc', 255)
        table.string('date_arrived_station')
        table.string('duty_phone', 255)
        table.string('tafmsd')
        table.string('doe')
        table.string('dos')
        table.string('date_of_birth')
        table.string('home_address', 255)
        table.string('home_city', 255)
        table.string('home_state', 255)
        table.string('home_zip', 255)
        table.string('supv_name', 255)
        table.string('grade_perm_proj', 255)
        table.string('uif_code', 255)
        table.string('uif_disposition_date')
        table.string('proj_eval_close_date')
        table.string('marital_status')
        table.string('rnltd')
        table.string('gaining_pas', 255)
        table.string('gaining_pas_cleartext', 255)
        table.string('last_eval_rating', 255)
        table.string('last_eval_close_date')
        table.string('perf_indicator', 255)
        table.string('supv_begin_date')
        table.string('reenl_elig_status', 255)
        table.string('home_phone_number', 255)
        table.string('age')
        table.string('deros', 255)
        table.string('deploy_admin_status', 255)
        table.string('deploy_admin_status_cleartext', 255)
        table.string('deploy_admin_stop_date')
        table.string('deploy_legal_status', 255)
        table.string('deploy_legal_status_cleartext', 255)
        table.string('deploy_legal_stop_date')
        table.string('deploy_phys_status', 255)
        table.string('deploy_phys_status_cleartext', 255)
        table.string('deploy_phys_stop_date')
        table.string('deploy_time_status', 255)
        table.string('deploy_time_status_cleartext', 255)
        table.string('deploy_time_stop_date')
        table.string('availability_code', 255)
        table.string('availability_code_cleartext', 255)
        table.string('availability_date')
        table.string('availability_status', 255)
        table.string('availability_status_cleartext', 255)
        table.string('limitation_code', 255)
        table.string('limitation_code_cleartext', 255)
        table.string('limitation_end_date')
        table.string('sec_clr', 255)
        table.string('type_sec_inv', 255)
        table.string('dt_scty_inves_compl')
        table.string('sec_elig_dt')
        table.string('tech_id', 255)
        table.string('acdu_status', 255)
        table.string('ang_roll_indicator', 255)
        table.string('afr_section_id', 255)
        table.string('civilian_art_id', 255)
        table.string('attached_pas', 255)
        table.string('functional_category', 255)


    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('alpha_roster')
  
};
