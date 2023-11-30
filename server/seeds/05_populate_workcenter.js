/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("workcenters").del();
  await knex("workcenters").insert([
    {
      workcenter_name: "Metals Shop",
      workcenter_parent: "VQ1234",
      workcenter_abbr: "CYP",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "1",
    },
    {
      workcenter_name: "Electronics Shop",
      workcenter_parent: "NM1234",
      workcenter_abbr: "CYCP",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "2",
    },
    {
      workcenter_name: "Com Shop",
      workcenter_parent: "CYP",
      workcenter_abbr: "CYPR",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "1",
    },
    {
      workcenter_name: "Medical",
      workcenter_parent: "CYCP",
      workcenter_abbr: "CYCM",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "2",
    },
    {
      workcenter_name: "Radiology",
      workcenter_parent: "CYP",
      workcenter_abbr: "CYC",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "1",
    },
  ]);
};
