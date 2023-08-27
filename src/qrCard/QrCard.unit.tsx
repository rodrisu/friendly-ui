import React from 'react'
import { shallow } from 'enzyme'

import { render, screen } from '@testing-library/react'

import { ItemInfo } from '../itemInfo'
import { QrCard } from './QrCard'

const mockedProps = {
  mainTitle: 'Title',
  imageUrl: 'http://link',
}

describe('QrCard', () => {
  it('Should render an itemInfo with itemMainTitle and without itemMainInfo', () => {
    const itemMainTitle = 'itemMainTitle'
    const qrCard = shallow(<QrCard {...mockedProps} itemMainTitle={itemMainTitle} />)
    const itemInfo = qrCard.find(ItemInfo)

    expect(itemInfo.exists()).toBe(true)
    expect(itemInfo.prop('mainTitle')).toEqual(itemMainTitle)
    expect(itemInfo.prop('mainInfo')).toEqual(undefined)
  })

  it('Should render an itemInfo with itemMainInfo and without itemMainTitle', () => {
    const itemMainInfo = 'itemMainInfo'
    const qrCard = shallow(<QrCard {...mockedProps} itemMainInfo={itemMainInfo} />)
    const itemInfo = qrCard.find(ItemInfo)

    expect(itemInfo.exists()).toBe(true)
    expect(itemInfo.prop('mainInfo')).toEqual(itemMainInfo)
    expect(itemInfo.prop('mainTitle')).toEqual(undefined)
  })

  it('should have an alt text on QR code image', () => {
    render(<QrCard {...mockedProps} imageAlt="alt text for QR code image" />)
    const qrCodeImage = screen.queryByAltText('alt text for QR code image')
    expect(qrCodeImage).toBeInTheDocument()
  })

  it('Should render a h2 when using mainTitle', () => {
    render(<QrCard {...mockedProps} mainTitle="Main Title" />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
