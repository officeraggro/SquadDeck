const knex = require('knex')(require('./knexfile')['development'])

const getFullRoster = () => {
    return knex('alpha_roster AS ar').select('ar.id', 'ar.full_name', 'ar.grade', 'ar.office_symbol', 'ar.duty_title', 'ar.duty_start_date', 'ar.assigned_pas', 'ar.assigned_pas_cleartext', 'ar.dafsc')

}

const getPersonnelDetails = () => {
    return knex('personnel_details AS pd').select('pd.id', 'pd.favorite_movie', 'pd.hobbies', 'pd.achievements', 'pd.personal_img', 'pd.grade_emblem_img', 'pd.achievement_imgs', 'pd.interesting_fact')
}

module.exports = {
  getFullRoster,
  getPersonnelDetails,
};