import React from 'react'

import { render, screen } from '@testing-library/react'

import { WarningIcon } from '../icon/warningIcon'
import { Address, Itinerary } from '../itinerary'
import { TripCard, TripCardProps, User } from './TripCard'

function createPassengers(count: number): Array<User> {
  const passengers: Array<User> = []

  for (let index = 0; index < count; index += 1) {
    passengers.push({
      avatarUrl: '//placehold.it/500x500',
      firstName: `Jane ${index}`,
    })
  }

  return passengers
}

function createProps(props: Partial<TripCardProps> = {}): TripCardProps {
  return {
    href: '#',
    itinerary: (
      <Itinerary>
        <Address label="Paris" subLabel="Porte de Vincennes" time="09:00" />
        <Address label="Bordeaux" subLabel="Gare Bordeaux Saint-Jean" time="12:00" />
      </Itinerary>
    ),
    ...props,
  }
}

const defaultDriver = {
  avatarUrl: '//placehold.it/500x500',
  firstName: 'Jane',
}

describe('TripCard', () => {
  it('should have aria-label attribute on the wrapper link', () => {
    const props = createProps({ 'aria-label': 'Trip label' })
    render(<TripCard {...props} />)

    expect(screen.getByRole('link', { name: 'Trip label' })).toBeInTheDocument()
  })

  it('should render itinerary', () => {
    const props = createProps({})
    render(<TripCard {...props} />)
    expect(screen.getByText('Porte de Vincennes')).toBeInTheDocument()
    expect(screen.getByText('Gare Bordeaux Saint-Jean')).toBeInTheDocument()
  })

  it('Should use the right element (specified in href prop)', () => {
    const props = createProps({ href: <div data-testid="href" /> })
    render(<TripCard {...props} />)
    expect(screen.getByTestId('href')).toBeInTheDocument()
  })

  it('Should not have the ladies only icon by default', () => {
    const props = createProps({
      titles: { ladiesOnly: 'Ladies only title' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByTitle('Ladies only title')).not.toBeInTheDocument()
  })

  it('Should have the ladies only icon', () => {
    const props = createProps({
      driver: defaultDriver,
      flags: { ladiesOnly: true },
      titles: { ladiesOnly: 'Ladies only title' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByTitle('Ladies only title')).toBeInTheDocument()
  })

  it('Should not have the alone in the back icon by default', () => {
    const props = createProps({
      driver: defaultDriver,
      titles: { aloneInTheBack: 'Alone in the back' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByTitle('Alone in the back')).not.toBeInTheDocument()
  })

  it('Should have the alone in the back icon', () => {
    const props = createProps({
      driver: defaultDriver,
      flags: { aloneInTheBack: true },
      titles: { aloneInTheBack: 'Alone in the back' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByTitle('Alone in the back')).toBeInTheDocument()
  })

  it('Should not have the max two icon by default', () => {
    const props = createProps({
      driver: defaultDriver,
      titles: { maxTwo: 'Max two' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByTitle('Max two')).not.toBeInTheDocument()
  })

  it('Should have the max two icon', () => {
    const props = createProps({
      driver: defaultDriver,
      flags: { maxTwo: true },
      titles: { maxTwo: 'Max two' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByTitle('Max two')).toBeInTheDocument()
  })

  it('Should not have the auto approval icon by default', () => {
    const props = createProps({
      driver: defaultDriver,
      titles: { autoApproval: 'Auto approval' },
    })

    render(<TripCard {...props} />)
    expect(screen.queryByText('Auto approval')).not.toBeInTheDocument()
  })

  it('Should have the auto approval icon', () => {
    const props = createProps({
      driver: defaultDriver,
      flags: { autoApproval: true },
      titles: { autoApproval: 'Auto approval' },
    })

    render(<TripCard {...props} />)
    expect(screen.getByTitle('Auto approval')).toBeInTheDocument()
  })

  it("Should show the driver's name", () => {
    const props = createProps({
      driver: defaultDriver,
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('Jane')).toBeInTheDocument()
  })

  it("Should show the driver's avatar", () => {
    const props = createProps({
      driver: defaultDriver,
    })

    const { container } = render(<TripCard {...props} />)
    expect(container.querySelector('img[src="//placehold.it/500x500"]')).toBeInTheDocument()
  })

  it("Should show the driver's ratings", () => {
    const props = createProps({
      driver: {
        ...defaultDriver,
        rating: '3 stars',
      },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('3 stars')).toBeInTheDocument()
  })

  it("Should render driver's sub text", () => {
    const props = createProps({
      driver: {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'BlaBlaCar',
        subText: '3 changes',
      },
    })

    render(<TripCard {...props} />)
    expect(screen.getByText('3 changes')).toBeInTheDocument()
  })

  it('Should render 3 passengers', () => {
    const props = createProps({ passengers: createPassengers(3) })
    render(<TripCard {...props} />)
    expect(screen.getAllByAltText(/^Jane \d$/)).toHaveLength(3)
  })

  it('Should render 5 passengers', () => {
    const props = createProps({ passengers: createPassengers(5) })
    render(<TripCard {...props} />)
    expect(screen.getAllByAltText(/^Jane \d$/)).toHaveLength(5)
  })

  it('Should render 4 passengers and a +6 icon', () => {
    const props = createProps({ passengers: createPassengers(10) })
    render(<TripCard {...props} />)
    expect(screen.getAllByAltText(/^Jane \d+$/)).toHaveLength(4)
    expect(screen.getByText('+6')).toBeInTheDocument()
  })

  it('Should render status information', () => {
    const props = createProps({
      statusInformation: { icon: <WarningIcon />, text: 'Warning!' },
    })
    render(<TripCard {...props} />)
    expect(screen.getByText('Warning!')).toBeInTheDocument()
  })

  it('Should render title', () => {
    const props = createProps({ mainTitle: 'Sun 3 march, 18:00' })
    render(<TripCard {...props} />)
    expect(screen.getByText('Sun 3 march, 18:00')).toBeInTheDocument()
  })

  it('Should render the tag', () => {
    const props = createProps({ tag: '10% discount' })
    render(<TripCard {...props} />)
    expect(screen.getByText('10% discount')).toBeInTheDocument()
  })

  it('Should render the price & original price', () => {
    const props = createProps({
      price: '8,00 €',
      originalPrice: {
        label: 'Original price',
        value: '10,00 €',
      },
    })
    render(<TripCard {...props} />)
    expect(screen.getByText('8,00 €')).toBeInTheDocument()
    expect(screen.getByLabelText('Original price')).toHaveTextContent('10,00 €')
  })

  describe('ID check icon', () => {
    it('should display ID check icon if driver ID is checked', () => {
      const props = createProps({
        driver: { ...defaultDriver, isIdChecked: true },
      })
      const { container } = render(<TripCard {...props} />)

      // TODO replace with screen.getByTitle (after adding a title to the svg) or getByAltText on the avatar (if adding an idCheck string in the alt)
      const checkIcons = container.getElementsByClassName('kirk-icon-check')

      expect(checkIcons.length).toEqual(1)
    })

    it('should NOT display ID check icon if driver ID is not checked', () => {
      const props = createProps({
        driver: { ...defaultDriver, isIdChecked: false },
      })
      const { container } = render(<TripCard {...props} />)

      // TODO replace with screen.getByTitle (after adding a title to the svg) or getByAltText on the avatar (if adding an idCheck string in the alt)
      const checkIcons = container.getElementsByClassName('kirk-icon-check')

      expect(checkIcons.length).toEqual(0)
    })
  })

  it('should render a h2 when using subheader', () => {
    const props = createProps({ subHeader: 'Cheapest' })
    render(<TripCard {...props} />)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
