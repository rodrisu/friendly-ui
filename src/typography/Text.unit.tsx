import React from 'react'

import { render, screen } from '@testing-library/react'

import { Text } from './Text'

describe('Text', () => {
  it('should render the content (string)', () => {
    render(<Text>Hello</Text>)

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should render the content (ReactNode)', () => {
    const { container } = render(
      <Text>
        <b>Yo</b>
      </Text>,
    )

    expect(container.innerHTML).toContain('<b>Yo</b>')
  })

  it('should replace new lines with br if content is string', () => {
    const content = `Hello
    world
    how are you?
    `

    const { container } = render(<Text>{content}</Text>)

    const brNumber = (container.innerHTML.match(/<br>/g) || []).length

    expect(brNumber).toEqual(3)
  })
})
