import React from 'react'

import { render, screen } from '@testing-library/react'

import { Button } from '../../../button'
import { BottomSection } from './BottomSection'

describe('BottomSection', () => {
  it('should render the button', () => {
    render(
      <BottomSection>
        <Button>My button</Button>
      </BottomSection>,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
