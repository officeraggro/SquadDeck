/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("units").del();
  await knex("units").insert([
    {
      unit_full_name: "SQUADRONLRAFB",
      unit_abbr: "VQ1234",
      unit_parent: "AF",
      unit_emblem_url: "foobar",
      unit_station: "Vandenburg",
    },
    {
      unit_full_name: "SQUADRONVSFB",
      unit_abbr: "NM1234",
      unit_parent: "AF",
      unit_emblem_url: "foobar",
      unit_station: "South Carolina",
    },
  ]);
};
