import request from 'superagent'

const api = {
  url: 'http://localhost:5000/api/v1/weather'
}

export function getWeather (city) {
  return request.get(`${api.url}/${city}`)
    .then(response => response.body)
    .catch(err => err.message)
}
