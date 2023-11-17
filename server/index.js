const express = require("express");
const knex = require("knex")(
  require("./knexfile")["production" || "development"]
);
const cors = require("cors");
const {
  getFullRoster,
  getPersonnelDetails,
  getUserInfo,
  addNewUser,
  getAllUnits,
  updatePersonnelDetails,
} = require("./controller");

const port = 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("This here is the root route!");
});

app.get("/roster", (req, res) => {
  try {
    getFullRoster()
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

// Fetch all units from the units table
app.get("/units", (req, res) => {
  try {
    getAllUnits()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  } catch (error) {
    res.status(500).send("Service Unavailable");
  }
});

// Fetch full roster and personnel details by unit
app.get("/units/:id/roster", async (req, res) => {
  const { id } = req.params

  try {
    const unitObj = await knex("units").select("*").where("units.id", "=", id);

    const workcentersObj = await knex("workcenters")
      .select("*")
      .where("workcenters.workcenter_unit_id", "=", unitObj[0].id);

    const alphaRosterObj = await knex("units_alpha_roster AS uar")
      .join("alpha_roster AS ar", "ar.id", "=", "uar.alpha_roster_id")
      .join("personnel_details AS pd", "pd.alpha_roster_id", "=", "ar.id")
      .select(
        "ar.*",
        "pd.id AS personnel_id",
        "pd.go_by",
        "pd.favorite_movie",
        "pd.hobbies",
        "pd.achievements",
        "pd.spouse_name",
        "pd.children_num",
        "pd.children_names",
        "pd.personal_img",
        "pd.grade_emblem_img",
        "pd.achievement_imgs",
        "pd.interesting_fact"
      )
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
    };

    res.status(200).send(unitAlphaRosterObj);
  } catch (err) {
    res.status(404).send("Page not found");
  }
});

// Fetch additional Squad Deck user details from the users table upon successful authentication
app.get('/users/:email', (req, res) => {
  const { email } = req.params

  try {
    getUserInfo(email)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).send("User not found");
      });
  } catch (err) {
    res.status(500).send("Service Unavailable");
  }
});

// Add a new user to the users table
app.post("/users", (req, res) => {
  const user = req.body;

  try {
    addNewUser(user)
      .then((data) => {
        res.status(201).send("New SquadDeck user added");
      })
      .catch((err) => {
        res.status(400).send("Invalid Request");
      });
  } catch (err) {
    res.status(500).send("Service Unavailable");
  }
});

app.patch("/units/:id1/roster/:id2", (req, res) => {
  const unit_id = req.params.id1;
  const roster_id = req.params.id2;
  const update = req.body;
  const personnel_id = update.alpha_roster_id;
  const updateKeys = Object.keys(update);
  const personnelDetailFields = [
    "alpha_roster_id",
    "go_by",
    "favorite_movie",
    "hobbies",
    "achievements",
    "spouse_name",
    "children_num",
    "children_names",
    "personal_img",
    "grade_emblem_img",
    "achievement_imgs",
    "interesting_fact",
  ];
  const alphaRosterFields = [
    "full_name",
    "grade",
    "record_status",
    "assigned_pas",
    "assigned_pas_cleartext",
    "office_symbol",
    "duty_title",
    "duty_start_date",
    "dor",
    "dafsc",
    "cafsc",
    "pafsc",
    "two_afsc",
    "three_afsc",
    "four_afsc",
    "date_arrived_station",
    "duty_phone",
    "tafmsd",
    "doe",
    "dos",
    "date_of_birth",
    "home_address",
    "home_city",
    "home_state",
    "home_zip",
    "supv_name",
    "grade_perm_proj",
    "uif_code",
    "uif_disposition_date",
    "proj_eval_close_date",
    "marital_status",
    "rnltd",
    "gaining_pas",
    "gaining_pas_cleartext",
    "last_eval_rating",
    "last_eval_close_date",
    "perf_indicator",
    "supv_begin_date",
    "reenl_elig_status",
    "home_phone_number",
    "age",
    "deros",
    "deploy_admin_status",
    "deploy_admin_status_cleartext",
    "deploy_admin_stop_date",
    "deploy_legal_status",
    "deploy_legal_status_cleartext",
    "deploy_legal_stop_date",
    "deploy_phys_status",
    "deploy_phys_status_cleartext",
    "deploy_phys_stop_date",
    "deploy_time_status",
    "deploy_time_status_cleartext",
    "deploy_time_stop_date",
    "availability_code",
    "availability_code_cleartext",
    "availability_date",
    "availability_status",
    "availability_status_cleartext",
    "limitation_code",
    "limitataion_code_cleartext",
    "limitation_end_date",
    "sec_clr",
    "type_sec_inv",
    "dt_scty_inves_compl",
    "sec_elig_dt",
    "tech_id",
    "acdu_status",
    "ang_roll_indicator",
    "afr_section_id",
    "civilian_art_id",
    "attached_pas",
    "functional_category",
  ];
  const personnelDetailsUpdates = [];

  const alphaRosterUpdates = [];

  for (let i in update) {
    if (personnelDetailFields.includes(i)) {
      personnelDetailsUpdates.push(`{"${i}": "${update[i]}"}`);
    } else if (alphaRosterFields.includes(i)) {
      alphaRosterUpdates.push(`{"${i}": "${update[i]}"}`);
    }

  }

  const personnelDetailsUpdates2 = personnelDetailsUpdates.map(elem => JSON.parse(elem))
  const alphaRosterUpdates2 = alphaRosterUpdates.map(elem => JSON.parse(elem))

  const promiseArray = []
  
  if(personnelDetailsUpdates2.length !== 0){
    for(let update of personnelDetailsUpdates2){
      promiseArray.push(knex('personnel_details').where('alpha_roster_id', '=', personnel_id).update(JSON.stringify(update)))
      console.log(JSON.stringify(update))
    }
  }
  if(alphaRosterUpdates2.length !== 0){
    for(let update of alphaRosterUpdates2){
    promiseArray.push(knex('alpha_roster').where('id', '=', roster_id).update(JSON.stringify(update)))
  }} 
  Promise.all(promiseArray).then(data => res.status(200).send('it worked'))

    // updatePersonnelDetails(personnel_id, JSON.stringify(personnelDetailsUpdates2))
    // .then(data => res.status(200).send('personnel record updated'))
    // .catch(err => res.status(400).send('invalid request'))
  

  
// } catch (err) {
//   res.status(500).send('service unavalaible')
// }
// try{
// if(alphaRosterUpdates2.length !== 0){
//     updateAlphaRoster(roster_id, JSON.stringify(alphaRosterUpdates2))
//     .then(data => res.status(200).send('alpha roster record updated'))
//     .catch(err => res.status(400).send('invalid request'))
//   }
// } catch (err) {
//   res.status(500).send('service unavalaible')
// }
});

app.post("/roster", async (req, res) => {
  try {
    const roster = req.body;
  const fetchRoster = await getFullRoster();

	// is backend empty? if yes, populate with new body data
	if (fetchRoster.length === 0) {
		for (let i = 0; i < roster.length; i++) {
			// set new user equal to current req.body row
			const newUser = {
        full_name: roster[i].FULL_NAME,
        grade: roster[i].GRADE,
        record_status: roster[i].RECORD_STATUS,
        assigned_pas: roster[i].ASSIGNED_PAS,
        assigned_pas_cleartext: roster[i].ASSIGNED_PAS_CLEARTEXT,
        office_symbol: roster[i].OFFICE_SYMBOL,
        duty_title: roster[i].DUTY_TITLE,
        duty_start_date: roster[i].DUTY_START_DATE,
        dor: roster[i].DOR,
        dafsc: roster[i].DAFSC,
        cafsc: roster[i].CAFSC,
        pafsc: roster[i].PAFSC,
        two_afsc: roster[i].TWO_AFSC,
        three_afsc: roster[i].THREE_AFSC,
        four_afsc: roster[i].FOUR_AFSC,
        date_arrived_station: roster[i].DATE_ARRIVED_STATION,
        duty_phone: roster[i].DUTY_PHONE,
        tafmsd: roster[i].TAFMSD,
        doe: roster[i].DOE,
        dos: roster[i].DOS,
        date_of_birth: roster[i].DATE_OF_BIRTH,
        home_address: roster[i].HOME_ADDRESS,
        home_city: roster[i].HOME_CITY,
        home_state: roster[i].HOME_STATE,
        home_zip: roster[i].HOME_ZIP,
        supv_name: roster[i].SUPV_NAME,
        grade_perm_proj: roster[i].GRADE_PERM_PROJ,
        uif_code: roster[i].UIF_CODE,
        uif_disposition_date: roster[i].UIF_DISPOSITION_DATE,
        proj_eval_close_date: roster[i].PROJ_EVAL_CLOSE_DATE,
        marital_status: roster[i].MARITAL_STATUS,
        rnltd: roster[i].RNLTD,
        gaining_pas: roster[i].GAINING_PAS,
        gaining_pas_cleartext: roster[i].GAINING_PAS_CLEARTEXT,
        last_eval_rating: roster[i].LAST_EVAL_RATING,
        last_eval_close_date: roster[i].LAST_EVAL_CLOSE_DATE,
        perf_indicator: roster[i].PERF_INDICATOR,
        supv_begin_date: roster[i].SUPV_BEGIN_DATE,
        reenl_elig_status: roster[i].REENL_ELIG_STATUS,
        home_phone_number: roster[i].HOME_PHONE_NUMBER,
        age: roster[i].AGE,
        deros: roster[i].DEROS,
        deploy_admin_status: roster[i].DEPLOY_ADMIN_STATUS,
        deploy_admin_status_cleartext: roster[i].DEPLOY_ADMIN_STATUS_CLEARTEXT,
        deploy_admin_stop_date: roster[i].DEPLOY_ADMIN_STOP_DATE,
        deploy_legal_status: roster[i].DEPLOY_LEGAL_STATUS,
        deploy_legal_status_cleartext: roster[i].DEPLOY_LEGAL_STATUS_CLEARTEXT,
        deploy_legal_stop_date: roster[i].DEPLOY_LEGAL_STOP_DATE,
        deploy_phys_status: roster[i].DEPLOY_PHYS_STATUS,
        deploy_phys_status_cleartext: roster[i].DEPLOY_PHYS_STATUS_CLEARTEXT,
        deploy_phys_stop_date: roster[i].DEPLOY_PHYS_STOP_DATE,
        deploy_time_status: roster[i].DEPLOY_TIME_STATUS,
        deploy_time_status_cleartext: roster[i].DEPLOY_TIME_STATUS_CLEARTEXT,
        deploy_time_stop_date: roster[i].DEPLOY_TIME_STOP_DATE,
        availability_code: roster[i].AVAILABILITY_CODE,
        availability_code_cleartext: roster[i].AVAILABILITY_CODE_CLEARTEXT,
        availability_date: roster[i].AVAILABILITY_DATE,
        availability_status: roster[i].AVAILABILITY_STATUS,
        availability_status_cleartext: roster[i].AVAILABILITY_STATUS_CLEARTEXT,
        limitation_code: roster[i].LIMITATION_CODE,
        limitation_code_cleartext: roster[i].LIMITATION_CODE_CLEARTEXT,
        limitation_end_date: roster[i].LIMITATION_END_DATE,
        sec_clr: roster[i].SEC_CLR,
        type_sec_inv: roster[i].TYPE_SEC_INV,
        dt_scty_inves_compl: roster[i].DT_SCTY_INVES_COMPL,
        sec_elig_dt: roster[i].SEC_ELIG_DT,
        tech_id: roster[i].TECH_ID,
        acdu_status: roster[i].ACDU_STATUS,
        ang_roll_indicator: roster[i].ANG_ROLL_INDICATOR,
        afr_section_id: roster[i].AFR_SECTION_ID,
        civilian_art_id: roster[i].CIVILIAN_ART_ID,
        attached_pas: roster[i].ATTACHED_PAS,
        functional_category: roster[i].FUNCTIONAL_CATEGORY,
      };

      knex("alpha_roster")
      .insert(newUser)
      .then((data) => res.status(201).send(`New user added: ${newUser.full_name}`))
      .catch((err) => res.status(400).send("Invalid request"));
		}
	} else {

    for (let i = 0; i < roster.length; i++) {
      const phoneNums = await knex('alpha_roster AS ar').select('ar.home_phone_number');
      const phoneBook = phoneNums.map((num) => num.home_phone_number);
      console.log(phoneBook);
      // If current list of telephone #s includes new user, don't add them (continue)
      if (phoneBook.includes(roster[i].HOME_PHONE_NUMBER)) {
        console.log('Member already exists.')
        continue;
      }

			// set new user equal to current req.body row
			const newUser = {
        full_name: roster[i].FULL_NAME,
        grade: roster[i].GRADE,
        record_status: roster[i].RECORD_STATUS,
        assigned_pas: roster[i].ASSIGNED_PAS,
        assigned_pas_cleartext: roster[i].ASSIGNED_PAS_CLEARTEXT,
        office_symbol: roster[i].OFFICE_SYMBOL,
        duty_title: roster[i].DUTY_TITLE,
        duty_start_date: roster[i].DUTY_START_DATE,
        dor: roster[i].DOR,
        dafsc: roster[i].DAFSC,
        cafsc: roster[i].CAFSC,
        pafsc: roster[i].PAFSC,
        two_afsc: roster[i].TWO_AFSC,
        three_afsc: roster[i].THREE_AFSC,
        four_afsc: roster[i].FOUR_AFSC,
        date_arrived_station: roster[i].DATE_ARRIVED_STATION,
        duty_phone: roster[i].DUTY_PHONE,
        tafmsd: roster[i].TAFMSD,
        doe: roster[i].DOE,
        dos: roster[i].DOS,
        date_of_birth: roster[i].DATE_OF_BIRTH,
        home_address: roster[i].HOME_ADDRESS,
        home_city: roster[i].HOME_CITY,
        home_state: roster[i].HOME_STATE,
        home_zip: roster[i].HOME_ZIP,
        supv_name: roster[i].SUPV_NAME,
        grade_perm_proj: roster[i].GRADE_PERM_PROJ,
        uif_code: roster[i].UIF_CODE,
        uif_disposition_date: roster[i].UIF_DISPOSITION_DATE,
        proj_eval_close_date: roster[i].PROJ_EVAL_CLOSE_DATE,
        marital_status: roster[i].MARITAL_STATUS,
        rnltd: roster[i].RNLTD,
        gaining_pas: roster[i].GAINING_PAS,
        gaining_pas_cleartext: roster[i].GAINING_PAS_CLEARTEXT,
        last_eval_rating: roster[i].LAST_EVAL_RATING,
        last_eval_close_date: roster[i].LAST_EVAL_CLOSE_DATE,
        perf_indicator: roster[i].PERF_INDICATOR,
        supv_begin_date: roster[i].SUPV_BEGIN_DATE,
        reenl_elig_status: roster[i].REENL_ELIG_STATUS,
        home_phone_number: roster[i].HOME_PHONE_NUMBER,
        age: roster[i].AGE,
        deros: roster[i].DEROS,
        deploy_admin_status: roster[i].DEPLOY_ADMIN_STATUS,
        deploy_admin_status_cleartext: roster[i].DEPLOY_ADMIN_STATUS_CLEARTEXT,
        deploy_admin_stop_date: roster[i].DEPLOY_ADMIN_STOP_DATE,
        deploy_legal_status: roster[i].DEPLOY_LEGAL_STATUS,
        deploy_legal_status_cleartext: roster[i].DEPLOY_LEGAL_STATUS_CLEARTEXT,
        deploy_legal_stop_date: roster[i].DEPLOY_LEGAL_STOP_DATE,
        deploy_phys_status: roster[i].DEPLOY_PHYS_STATUS,
        deploy_phys_status_cleartext: roster[i].DEPLOY_PHYS_STATUS_CLEARTEXT,
        deploy_phys_stop_date: roster[i].DEPLOY_PHYS_STOP_DATE,
        deploy_time_status: roster[i].DEPLOY_TIME_STATUS,
        deploy_time_status_cleartext: roster[i].DEPLOY_TIME_STATUS_CLEARTEXT,
        deploy_time_stop_date: roster[i].DEPLOY_TIME_STOP_DATE,
        availability_code: roster[i].AVAILABILITY_CODE,
        availability_code_cleartext: roster[i].AVAILABILITY_CODE_CLEARTEXT,
        availability_date: roster[i].AVAILABILITY_DATE,
        availability_status: roster[i].AVAILABILITY_STATUS,
        availability_status_cleartext: roster[i].AVAILABILITY_STATUS_CLEARTEXT,
        limitation_code: roster[i].LIMITATION_CODE,
        limitation_code_cleartext: roster[i].LIMITATION_CODE_CLEARTEXT,
        limitation_end_date: roster[i].LIMITATION_END_DATE,
        sec_clr: roster[i].SEC_CLR,
        type_sec_inv: roster[i].TYPE_SEC_INV,
        dt_scty_inves_compl: roster[i].DT_SCTY_INVES_COMPL,
        sec_elig_dt: roster[i].SEC_ELIG_DT,
        tech_id: roster[i].TECH_ID,
        acdu_status: roster[i].ACDU_STATUS,
        ang_roll_indicator: roster[i].ANG_ROLL_INDICATOR,
        afr_section_id: roster[i].AFR_SECTION_ID,
        civilian_art_id: roster[i].CIVILIAN_ART_ID,
        attached_pas: roster[i].ATTACHED_PAS,
        functional_category: roster[i].FUNCTIONAL_CATEGORY,
			};

      console.log('Member was added:')
      console.log(newUser)

      knex("alpha_roster")
      .insert(newUser)
      .then((data) => res.status(201).send(`New user added: ${newUser.full_name}`))
      .catch((err) => res.status(400).send("Invalid request"));
		}
  }
  } catch {
    res.status(400);
  }
});

app.listen(port, () => {
  console.log(`Express server running on ${port}`);
});
