import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    screen.logTestingPlaygroundURL()

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Morrinhos',
      slug: 'morrinhos',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Netherlands',
      slug: 'netherlands',
      location: {
        latitude: -100,
        longitude: -200
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/morrinhos/i)).toBeInTheDocument()
    expect(screen.getByTitle(/netherlands/i)).toBeInTheDocument()
  })
})
