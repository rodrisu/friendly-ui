import React from 'react'

import { render, screen, within } from '@testing-library/react'

import { LadyIcon } from '../icon/ladyIcon'
import { LightningIcon } from '../icon/lightningIcon'
import { ProfileLeft } from './ProfileLeft'

const assertProfileNameAndPicture = (): void => {
  expect(screen.getByText('display_name')).toBeInTheDocument()
  expect(screen.getByAltText('display_name')).toBeInTheDocument()
}

describe('ProfileLeft', () => {
  it('should render a simple profile', () => {
    const props = {
      displayName: 'display_name',
      pictureUrl: 'http://pic_url',
      averageRating: '4.1',
    }
    render(<ProfileLeft {...props} />)

    assertProfileNameAndPicture()
    expect(screen.getByText('4.1')).toBeInTheDocument()
  })

  it('should render a profile with additional info', () => {
    const props = {
      displayName: 'display_name',
      pictureUrl: 'http://pic_url',
      averageRating: '4.1',
      additionalInfo: 'Some extra info',
    }
    render(<ProfileLeft {...props} />)

    assertProfileNameAndPicture()
    // Verify that when both averageRating and additionalInfo, additionalInfo
    // takes over.
    expect(screen.queryByText('4.1')).not.toBeInTheDocument()
    expect(screen.getByText('Some extra info')).toBeInTheDocument()
  })

  it('should render a profile with options', () => {
    const props = {
      displayName: 'display_name',
      pictureUrl: 'http://pic_url',
      averageRating: '4.1',
      options: [
        {
          icon: <LightningIcon />,
          label: 'Auto-accept',
        },
        {
          icon: <LadyIcon />,
          label: 'Ladies only',
        },
      ],
    }
    render(<ProfileLeft {...props} />)

    assertProfileNameAndPicture()
    expect(screen.getByText('4.1')).toBeInTheDocument()

    const optionList = screen.getByRole('list')
    const options = within(optionList).getAllByRole('listitem')
    expect(options).toHaveLength(2)
    expect(within(optionList).getByTitle('Auto-accept')).toBeInTheDocument()
    expect(within(optionList).getByTitle('Ladies only')).toBeInTheDocument()
  })

  describe('ID check icon', () => {
    it('should display ID check icon if driver ID is checked', () => {
      const props = {
        displayName: 'display_name',
        pictureUrl: 'http://pic_url',
        isIdChecked: true,
      }
      const { container } = render(<ProfileLeft {...props} />)

      // TODO replace with screen.getByTitle (after adding a title to the svg) or getByAltText on the avatar (if adding an idCheck string in the alt)
      const checkIcons = container.getElementsByClassName('kirk-icon-check')

      expect(checkIcons.length).toEqual(1)
    })

    it('should NOT display ID check icon if driver ID is not checked', () => {
      const props = {
        displayName: 'display_name',
        pictureUrl: 'http://pic_url',
        isIdChecked: false,
      }
      const { container } = render(<ProfileLeft {...props} />)

      // TODO replace with screen.getByTitle (after adding a title to the svg) or getByAltText on the avatar (if adding an idCheck string in the alt)
      const checkIcons = container.getElementsByClassName('kirk-icon-check')

      expect(checkIcons.length).toEqual(0)
    })
  })
})
