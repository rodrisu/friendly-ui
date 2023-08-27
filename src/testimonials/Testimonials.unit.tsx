import React from 'react'

import { render, screen } from '@testing-library/react'

import { Testimonials } from './Testimonials'

const renderTestimonials = (): JSX.Element => (
  <Testimonials
    illustration={
      <img
        src="https://cdn.blablacar.com/kairos/assets/build/images/indicate-your-route-fef6b1a4c9dac38c77c092858d73add3.svg"
        alt=""
      />
    }
    testimonials={[
      {
        quote:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet aliquet tortor, non tincidunt lectus tincidunt sit amet. Quisque ac nisl massa.',
        author: 'Brenda',
      },
      {
        quote:
          'Nullam sed urna id dui ultrices condimentum. Etiam ac vestibulum odio. Etiam ut elementum augue.',
        author: 'George',
      },
      {
        quote:
          'Aliquam erat volutpat. Donec euismod et sem at pretium. Mauris mattis luctus condimentum. Aenean ac iaculis velit.',
        author: 'Yorg',
      },
    ]}
    a11y={{
      mainTitle: 'Testimonials',
      prev: 'Previous',
      next: 'Next',
    }}
  />
)

describe('Testimonials', () => {
  it('should render buttons on large medias', () => {
    render(renderTestimonials())

    expect(screen.getAllByRole('button', { hidden: true })).toHaveLength(2)
    expect(screen.getByRole('list', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText('Brenda')).toBeInTheDocument()
  })
})
