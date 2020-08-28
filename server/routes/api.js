const express = require('express')
const request = require('superagent')

const router = express.Router()

// Define API parameters
const api = {
  url: 'api.openweathermap.org/data/2.5/weather',
  key: process.env.WEATHER_API_KEY
}

// Routing
router.get('/weather/:city', (req, res) => {
  console.log(req.params)
  const endpoint = `${api.url}?q=${req.params.city}&appid=${api.key}`

  request.get(endpoint)
    .then(response => {
      console.log(response.body.weather[0])
      res.json(response.body.weather[0])
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router
