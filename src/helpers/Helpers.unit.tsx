import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Helpers } from './Helpers'

const renderHelpers = (onClick = (): void => {}): JSX.Element => (
  <Helpers
    illustration={
      <img
        src="https://cdn.blablacar.com/kairos/assets/build/images/astronaut-79c2cfcb1a66f7c9afc1bbc50f0037fd.svg"
        alt="Decorative illustration"
      />
    }
    content={{
      title: 'Need some help?',
      paragraph: 'Our community of experienced members can answer your questions, live!',
      button: 'Chat with a BlaBlaCar driver',
    }}
    onClick={onClick}
  />
)

describe('Helpers', () => {
  it('should render all elements', () => {
    render(renderHelpers())

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Need some help?')
    expect(
      screen.getByText('Our community of experienced members can answer your questions, live!'),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Chat with a BlaBlaCar driver' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Decorative illustration' })).toBeInTheDocument()
  })

  it('should trigger onClick', () => {
    const onClick = jest.fn()
    render(renderHelpers(onClick))

    const button = screen.getByRole('button', { name: 'Chat with a BlaBlaCar driver' })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
