const express = require('express');
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}))

app.get(':endpoint([\\/\\w\\.-]*)', async (req, res) => {
    const url = `https://www.sbazar.cz/api/v1${req.url}`
    const response = await axios.get(url)
    res.json(response.data)
});

app.post(':endpoint([\\/\\w\\.-]*)', async (req, res) => {
    const url = `https://aukro.cz/backend-web/api${req.url}`
    const body = req.body.body
    const response = await axios.post(url, body, {headers: {"Content-Type": "application/json"}})
    res.json(response.data)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));