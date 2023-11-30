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
      unit_emblem_url:
        "https://cdn.discordapp.com/attachments/1163519713880571954/1179505723990888458/Federated_Suns_Logo.png?ex=657a074e&is=6567924e&hm=2562972f54e26857233ad5d1f802db5382d4dc589aaf76577a70cd2fc3ce0d2f&",
      unit_station: "Vandenburg",
    },
    {
      unit_full_name: "SQUADRONVSFB",
      unit_abbr: "NM1234",
      unit_parent: "AF",
      unit_emblem_url:
        "https://cfw.sarna.net/wiki/images/9/92/Dragons_Fury_logo.png",
      unit_station: "South Carolina",
    },
  ]);
};
