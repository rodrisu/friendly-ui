import React from 'react'

import { render, screen } from '@testing-library/react'

import { color } from '../_utils/branding'
import { Button } from '../button'
import { Text, TextDisplayType } from '../text'
import { TotalVoucher } from './TotalVoucher'

const renderComponent = (): JSX.Element => (
  <TotalVoucher
    title="Discover your welcome gift on BlaBlaCar"
    subTitle={
      <Text display={TextDisplayType.SUBHEADERSTRONG}>
        For your first carpooling, receive{' '}
        <Text display={TextDisplayType.SUBHEADERSTRONG} textColor={color.blue}>
          €25
        </Text>{' '}
        gas or a{' '}
        <Text display={TextDisplayType.SUBHEADERSTRONG} textColor={color.blue}>
          €40
        </Text>{' '}
        wash voucher
      </Text>
    }
    terms={{
      href: 'https://www.blablacar.fr',
      label: 'More informations',
    }}
    stepsTitle={
      <span>
        How to get your voucher{' '}
        <img
          src="https://cdn.blablacar.com/kairos/assets/build/images/logo-8923a9de546560936b0b8495568f3823.png"
          alt="Total logo"
        />
      </span>
    }
    steps={[
      {
        label: 'Step 1',
        description: 'Publish your first trip',
      },
      {
        label: 'Step 2',
        description: 'Share your trip with at least one passenger',
      },
      {
        label: 'Step 3',
        description: 'Register your IBAN and your postal address',
      },
      {
        label: 'Step 4',
        description: 'Receive your Total voucher in your mailbox',
      },
    ]}
    button={<Button href="https://www.blablacar.fr/offer-seats">Publish a ride</Button>}
  />
)

describe('TotalVoucher', () => {
  it('should render the component', () => {
    render(renderComponent())

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Discover your welcome gift on BlaBlaCar',
    )
    expect(screen.getByRole('img', { name: 'Total logo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Publish a ride' })).toHaveAttribute(
      'href',
      'https://www.blablacar.fr/offer-seats',
    )
  })
})
