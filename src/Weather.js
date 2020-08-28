import React, { useState, useEffect } from 'react'

import { getWeather } from './api/weather'

function Weather () {
  const [ weather, setWeather ] = useState()
  const [ raining, setRaining ] = useState(false)

  useEffect(() => {
    getWeather('London,uk')
      .then(weather => {
        setWeather(weather.main)
        
        if (weather.description.includes('rain') || weather.description.includes('drizzle'))
          setRaining(true)
      })
  })

  return (
    <>
      <h2>Current weather in London:</h2>

      <div>{weather}</div>
      {raining && 
        <span 
          role="img"
          aria-label="rain cloud"
        >
          🌧️
        </span>
      }

      <a
          href="https://openweathermap.org/city/2643743"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="weather-link"
        >
          See the full forecast here
        </a>
    </>
  )
}

export default Weather
