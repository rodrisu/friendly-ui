import React from 'react'

import { render, screen } from '@testing-library/react'

import { BlaBlaCarDaily } from './BlaBlaCarDaily'

const renderBlock = (): JSX.Element => (
  <BlaBlaCarDaily
    content={{
      title: 'And a €15 gas voucher with BlaBlaCar Daily',
      paragraph:
        'Receive a €15 gas voucher for your first trip with a confirmed passenger on BlaBlaCar Daily, the home-office commuting app. Terms of Service available on blablacardaily.com',
      link: 'Discover BlaBlaCar Daily',
    }}
    href="https://blablacardaily.com"
  />
)

describe('BlaBlaCarDaily', () => {
  it('should render the block', () => {
    render(renderBlock())

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'And a €15 gas voucher with BlaBlaCar Daily',
    )
    expect(screen.getByText(/Receive a €15 gas voucher for your first trip/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discover BlaBlaCar Daily' })).toHaveAttribute(
      'href',
      'https://blablacardaily.com',
    )
  })
})
