import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('', () => {
  it('renders raincloud emoji 🌧️', () => {
    const { getByText } = render(<App />)
    const raincloudEmoji = getByText(/🌧️/)
    expect(raincloudEmoji).toBeInTheDocument()
  })

  it('contains a link to the weather forecast', async () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('weather-link').getAttribute('href')).toMatch(/forecast/)
  })
})
