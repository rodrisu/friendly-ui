import React from 'react'

import { render, screen, within } from '@testing-library/react'

import { CountsCard } from './CountsCard'

const renderComponent = (): JSX.Element => (
  <CountsCard
    cards={[
      {
        title: 'Join 900,000',
        description: 'drivers already using BlaBlaCar',
      },
      {
        title: 'More than 90 million',
        description: 'BlaBlaCar members worldwide',
      },
      {
        title: 'Over 40 million',
        description: 'rides shared per year',
      },
    ]}
  />
)

describe('CountsCard', () => {
  it('should render the component', () => {
    render(renderComponent())

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(within(screen.getByRole('list')).getAllByRole('listitem')).toHaveLength(3)

    expect(screen.getByText('Join 900,000')).toBeInTheDocument()
    expect(screen.getByText('drivers already using BlaBlaCar')).toBeInTheDocument()
    expect(screen.getByText('More than 90 million')).toBeInTheDocument()
    expect(screen.getByText('BlaBlaCar members worldwide')).toBeInTheDocument()
    expect(screen.getByText('Over 40 million')).toBeInTheDocument()
    expect(screen.getByText('rides shared per year')).toBeInTheDocument()
  })
})
