import React from 'react'

function Weather () {
  return (
    <>
      <span 
          role="img"
          aria-label="rain cloud"
        >
          🌧️
        </span>
        <p>The weather in London is miserable.</p>
        <a
          href="https://darksky.net/forecast/51.5096,-0.0991/ca12/en"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="weather-link"
        >
          See the forecast here
        </a>
    </>
  )
}

export default Weather
