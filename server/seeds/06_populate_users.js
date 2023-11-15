/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex("users").insert([
    {
      email: "bhard@mail.local",
      uname: "bhard",
      user_id: "auth0|6553da2f4fb75917a1fcafef",
      profile_img:
        "https://s.gravatar.com/avatar/8794b286932ccf526621d89ce9890837?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbh.png",
      unit_abbr: "NM1234",
      role: "admin",
      user_unit_id: "1",
    },
    {
      email: "kstokes@mail.local",
      uname: "kstokes",
      user_id: "auth0|6553d9bf4fb75917a1fcaf57",
      profile_img:
        "https://s.gravatar.com/avatar/1c25cd340642e5327bfedb8eb9b96fa0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fks.png",
      unit_abbr: "NM1234",
      role: "admin  ",
      user_unit_id: "1",
    },
    {
      email: "michael.m9267@gmail.com",
      uname: "michaelm9267",
      user_id: "auth0|65550f826ac7eefb66a538dd",
      profile_img:
        "https://s.gravatar.com/avatar/da044e030515c7f4bba401985e53c78e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png",
      unit_abbr: "NM1234",
      role: "admin",
      user_unit_id: "1",
    },
    {
      email: "pham.loi51@gmail.com",
      uname: "michaelm9267",
      user_id: "auth0|65550f826ac7eefb66a538dd",
      profile_img:
        "https://s.gravatar.com/avatar/da044e030515c7f4bba401985e53c78e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png",
      unit_abbr: "NM1234",
      role: "admin",
      user_unit_id: "1",
    },
  ]);
};
