import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { render, screen } from '@testing-library/react'

import { Item } from '../_internals/item'
import { ComfortIcon } from '../icon/comfortIcon'
import { ItemChoice, ItemChoiceProps, ItemChoiceStatus, ItemChoiceStyle } from './index'

describe('ItemChoice', () => {
  const defaultProps: ItemChoiceProps = {
    label: 'Title',
    labelInfo: 'Title infos',
    data: 'Data',
    dataInfo: 'Data infos',
    leftAddon: <ComfortIcon />,
    rightAddon: <ComfortIcon />,
    className: 'custom-class-name',
    href: <a href="#" />,
    status: ItemChoiceStatus.DEFAULT,
    style: ItemChoiceStyle.PRIMARY,
    disabled: false,
    onClick() {},
  }

  it('Should use the Item component', () => {
    const itemChoice = mount(<ItemChoice {...defaultProps} />)
    expect(itemChoice.find(Item).exists()).toBe(true)
  })
  it('Should forward its props to the Item component', () => {
    const itemChoice = renderer.create(<ItemChoice {...defaultProps} />).toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should use a button tag if no href is given', () => {
    const itemChoice = renderer.create(<ItemChoice {...defaultProps} href="" />).toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should display a Loader when the component is in loading status', () => {
    const itemChoice = renderer
      .create(<ItemChoice {...defaultProps} status={ItemChoiceStatus.LOADING} />)
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should display a done Loader when the component is in checked status', () => {
    const itemChoice = renderer
      .create(<ItemChoice {...defaultProps} status={ItemChoiceStatus.CHECKED} />)
      .toJSON()
    expect(itemChoice).toMatchSnapshot()
  })
  it('Should support a disabled state', () => {
    const itemChoice = renderer.create(<ItemChoice {...defaultProps} disabled />).toJSON()
    expect(itemChoice).toMatchSnapshot()
  })

  it('should have a tag label', () => {
    render(<ItemChoice {...defaultProps} tagLabel="Discount 10%" />)
    expect(screen.getByText('Discount 10%')).toBeInTheDocument()
  })
})
