import React from 'react'
import cc from 'classcat'

import { Icon } from '../_utils/icon'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Avatar } from '../avatar'
import { StarIcon } from '../icon'
import { TextBody } from '../typography/body'
import {
  StyledOption,
  StyledOptionList,
  StyledProfileLeft,
  StyledRatingLabel,
  StyledSubInfo,
} from './ProfileLeft.style'

type Option = Readonly<{
  icon: React.ReactElement<Icon>
  label: string
}>

export type ProfileLeftProps = A11yProps &
  Readonly<{
    className?: string
    pictureUrl: string
    displayName: string
    isIdChecked?: boolean // Default to false
    // Some addtional information about the transporter e.g. '2 changes' for a bus
    // transporter.
    additionalInfo?: string
    // Average rating for the transporter. If both additionalInfo and
    // averageRating are defined, additionalInfo will be rendered first.
    averageRating?: string
    // List of options for the transporters: For carpool drivers, it will be
    // things like ladies-only, auto-accept, etc. For bus transporter, it might be
    // amenities like wifi, etc
    options?: ReadonlyArray<Option>
    noHorizontalSpacing?: boolean
  }>

const renderSubInfo = (additionalInfo?: string, averageRating?: string): JSX.Element | null => {
  if (!additionalInfo && !averageRating) {
    return null
  }

  if (additionalInfo) {
    return (
      <StyledSubInfo>
        <TextBody>{additionalInfo}</TextBody>
      </StyledSubInfo>
    )
  }

  if (averageRating) {
    return (
      <StyledSubInfo>
        <StarIcon fill={1} size={16} />
        <StyledRatingLabel>
          <TextBody>{averageRating}</TextBody>
        </StyledRatingLabel>
      </StyledSubInfo>
    )
  }

  return null
}

const renderOptionList = (options: ReadonlyArray<Option>): JSX.Element | null => {
  if (!options.length) {
    return null
  }

  return (
    <StyledOptionList>
      {options.map(option => {
        return (
          <StyledOption key={option.label} title={option.label}>
            {option.icon}
          </StyledOption>
        )
      })}
    </StyledOptionList>
  )
}

export function ProfileLeft(props: ProfileLeftProps): JSX.Element {
  const {
    className,
    displayName,
    pictureUrl,
    additionalInfo,
    averageRating,
    isIdChecked = false,
    options = [],
    noHorizontalSpacing = false,
  } = props

  const a11yAttrs = pickA11yProps<ProfileLeftProps>(props)
  const subInfo = renderSubInfo(additionalInfo, averageRating)
  const optionList = renderOptionList(options)
  return (
    <StyledProfileLeft
      className={cc(className)}
      leftTitle={displayName}
      leftBody={subInfo}
      leftAddon={<Avatar alt={displayName} image={pictureUrl} isIdChecked={isIdChecked} />}
      rightAddon={optionList}
      hasClickableColorRules
      noHorizontalSpacing={noHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}
