import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '../button'
import { ItemData } from './index'

const defaultProps = {
  mainTitle: 'Main information',
  data: 'Data',
}

describe('ItemData', () => {
  it('Should display left and right elements', () => {
    render(<ItemData {...defaultProps} />)
    expect(screen.getByText('Main information')).toBeInTheDocument()
    expect(screen.getByText('Data')).toBeInTheDocument()
  })

  it('Should trigger click on addon button', () => {
    const onButtonClick = jest.fn()
    render(
      <ItemData
        {...defaultProps}
        mainTitleButtonAddon={<Button onClick={onButtonClick}>More info</Button>}
      />,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  it('should have an aria-label to describe data prop when using strikethrough', () => {
    render(<ItemData {...defaultProps} data="10,00 €" dataStrikeThroughLabel="Original price" />)

    expect(screen.getByLabelText('Original price')).toHaveTextContent('10,00 €')
  })

  it('should have an aria-label to describe dataInfo prop when using strikethrough', () => {
    render(
      <ItemData {...defaultProps} dataInfo="10,00 €" dataInfoStrikeThroughLabel="Original price" />,
    )

    expect(screen.getByLabelText('Original price')).toHaveTextContent('10,00 €')
  })

  it('should have a tag label', () => {
    render(<ItemData {...defaultProps} tagLabel="Discount 10%" />)

    expect(screen.getByText('Discount 10%')).toBeInTheDocument()
  })
})
