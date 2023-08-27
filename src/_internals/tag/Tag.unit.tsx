import React from 'react'

import { render, screen } from '@testing-library/react'

import { Tag } from './Tag'

describe('Tag', () => {
  it('should ouput the label', () => {
    render(<Tag label="10% discount" />)
    expect(screen.getByText('10% discount')).toBeInTheDocument()
  })
})
