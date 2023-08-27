import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { ItemRadio, ItemRadioProps, ItemRadioStatus } from './index'

const defaultProps: ItemRadioProps = {
  labelTitle: 'Label title',
  label: 'Label',
  name: 'name',
  value: 0,
  className: 'custom-class-name',
  data: 'Data',
  dataInfo: 'Data info',
  checked: false,
  disabled: false,
  onChange() {},
  onClick() {},
  status: ItemRadioStatus.DEFAULT,
  key: 0,
}

function createProps(props: Partial<ItemRadioProps> = {}): ItemRadioProps {
  return { ...defaultProps, ...props }
}

describe('ItemRadio', () => {
  it('Should have the proper text informations', () => {
    render(<ItemRadio {...defaultProps} />)
    expect(
      screen.getByRole('radio', { name: 'Label title Label Data Data info' }),
    ).toBeInTheDocument()
  })

  it('Should display a Loader when the component is in loading status', () => {
    const props = createProps({ status: ItemRadioStatus.LOADING })
    render(<ItemRadio {...props} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('Should call onChange when clicking on the radio', () => {
    const props = createProps({ onChange: jest.fn() })
    render(<ItemRadio {...props} />)
    fireEvent.click(screen.getByRole('radio'))
    expect(props.onChange).toHaveBeenCalledWith({ name: 'name', value: 0 })
  })
})
