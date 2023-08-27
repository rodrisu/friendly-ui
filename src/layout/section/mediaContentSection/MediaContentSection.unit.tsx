import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { MediaContentSection } from './index'

const defaultProps = {
  title: 'section title',
  content: 'section content',
  buttonLabel: 'button label',
  buttonHref: 'http://blablacar.com',
  buttonClick: jest.fn(),
  media: <img src="http://blablacar.com/pic.jpg" alt="illustration" />,
}

describe('MediaContentSection', () => {
  it('should render default MediaContentSection section', () => {
    render(<MediaContentSection {...defaultProps} />)

    expect(screen.getByText('section title')).toBeInTheDocument()
    expect(screen.getByText('section content')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'button label' })).toHaveAttribute(
      'href',
      'http://blablacar.com',
    )
    expect(screen.getByRole('img', { name: 'illustration' })).toBeInTheDocument()
  })

  it('should call onClick', () => {
    render(<MediaContentSection {...defaultProps} />)

    fireEvent.click(screen.getByRole('link', { name: 'button label' }))
    expect(defaultProps.buttonClick).toHaveBeenCalled()
  })
})
