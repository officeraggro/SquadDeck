const knex = require('knex')(require('./knexfile')['production' || 'development'])

const getFullRoster = () => {
    return knex('alpha_roster AS ar').select('ar.id', 'ar.full_name', 'ar.grade', 'ar.office_symbol', 'ar.duty_title', 'ar.duty_start_date', 'ar.assigned_pas', 'ar.assigned_pas_cleartext', 'ar.dafsc', 'ar.home_phone_number')

}

const getPersonnelDetails = () => {
    return knex('personnel_details AS pd').select('pd.id', 'pd.go_by', 'pd.favorite_movie', 'pd.hobbies', 'pd.achievements', 'pd.personal_img', 'pd.grade_emblem_img', 'pd.achievement_imgs', 'pd.interesting_fact')
}

const getUserInfo = (email) => {
  return knex('users AS u').select('u.unit_abbr', 'role', 'user_unit_id').where('u.email', '=', email)
}

const addNewUser = (user) => {
  return knex('users AS u').insert([user])
}

const getAllUnits = () => {
  return knex('units AS u').select('u.*')
}

const updateAlphaRoster = (id, updates) => {
  return knex('alpha_roster').where('id', '=', id).update(updates)
}

const updatePersonnelDetails = (id, updates) => {
  return knex('personnel_details').where('alpha_roster_id', '=', id).update(updates)
}

module.exports = {
  getFullRoster,
  getPersonnelDetails,
  getUserInfo,
  addNewUser,
  getAllUnits,
  updateAlphaRoster,
  updatePersonnelDetails
};