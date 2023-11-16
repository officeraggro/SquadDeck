const express = require('express')
const knex = require("knex")(require("./knexfile")["development"]);
const cors = require('cors')
const { getFullRoster, getPersonnelDetails } = require("./controller");


const port = 8080

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('This here is the root route!')
})

// Route for testing purposes
app.get('/roster', (req, res) => {

    try {
        getFullRoster()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).send(err)
            })
    } catch (error) {
        res.status(500).send("Error: ", error)
    }
})

// Route for testing purposes
app.get("/personnel", (req, res) => {
  try {
    getPersonnelDetails()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  } catch (error) {
    res.status(500).send("Error: ", error);
  }
});

// Fetch full roster and personnel details by unit
app.get("/units/:id/roster", async (req, res) => {
  const { id } = req.params
  
  try {
    const unitObj = await knex('units').select('*').where('units.id', '=', id)

    const workcentersObj = await knex('workcenters').select('*').where('workcenters.workcenter_unit_id', '=', unitObj[0].id)

    const alphaRosterObj = await knex("units_alpha_roster AS uar")
      .join("alpha_roster AS ar", "ar.id", "=", "uar.alpha_roster_id")
      .join("personnel_details AS pd", "pd.alpha_roster_id", "=", "ar.id")
      .select("ar.*", "pd.id AS personnel_id", "pd.go_by", "pd.favorite_movie", "pd.hobbies", "pd.achievements", "pd.spouse_name", "pd.children_num", "pd.children_names", "pd.personal_img", "pd.grade_emblem_img", "pd.achievement_imgs", "pd.interesting_fact")
      .where("uar.unit_id", "=", unitObj[0].id);

    

    const unitAlphaRosterObj = {
      id: unitObj[0].id,
      unit_full_name: unitObj[0].unit_full_name,
      unit_abbr: unitObj[0].unit_abbr,
      unit_parent: unitObj[0].unit_parent,
      unit_emblem_url: unitObj[0].unit_emblem_url,
      unit_station: unitObj[0].unit_station,
      workcenters: workcentersObj,
      alpha_roster: alphaRosterObj,
    }

    res.status(200).send(unitAlphaRosterObj)

  } catch (err) {
    res.status(404).send("Page not found")
  }
})



app.post('/users', (req, res) => {
    res.status(200).json(req.body)
})


app.listen(port, () => {

    console.log(`Express server running on ${port}`)
})