const express = require('express')
const cors = require('cors')
const { getFullRoster, getPersonnelDetails } = require("./controller");

const port = 8080

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('This here is the root route!')
})

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



app.post('/users', (req, res) => {
    res.status(200).json(req.body)
})


app.listen(port, () => {

    console.log(`Express server running on ${port}`)
})