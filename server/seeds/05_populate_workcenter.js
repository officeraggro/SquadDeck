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
      workcenter_parent: "22 foobar",
      workcenter_abbr: "CYP",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "1",
    },
    {
      workcenter_name: "Electronics Shop",
      workcenter_parent: "23 foobar",
      workcenter_abbr: "CYCP",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "2",
    },
    {
      workcenter_name: "Com Shop",
      workcenter_parent: "24 foobar",
      workcenter_abbr: "CYPR",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "1",
    },
    {
      workcenter_name: "Medical",
      workcenter_parent: "25 foobar",
      workcenter_abbr: "CYCM",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "2",
    },
    {
      workcenter_name: "Radiology",
      workcenter_parent: "26 foobar",
      workcenter_abbr: "CYC",
      workcenter_emblem_url: "foobar",
      workcenter_unit_id: "1",
    },
  ]);
};
