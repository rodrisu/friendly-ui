import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { Item } from '../_internals/item'
import { Tag } from '../_internals/tag'
import { color } from '../_utils/branding'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Avatar } from '../avatar'
import { AloneInTheBackIcon } from '../icon/aloneInTheBackIcon'
import { ComfortIcon } from '../icon/comfortIcon'
import { LadyIcon } from '../icon/ladyIcon'
import { LightningIcon } from '../icon/lightningIcon'
import { ProfileLeft, ProfileLeftProps } from '../profileLeft'
import { SubHeader } from '../subHeader'
import { Text, TextDisplayType } from '../text'
import { Price } from './internals/Price'
import { StyledCardTag, StyledTripCard } from './TripCard.style'

/**
 * Display 5 passengers max.
 * When having more than this number, the last displayed one is replaced by a more counter.
 *
 * Exemples:
 * - 5 passengers or less: we display all of them
 * - 6 passengers: we display 4 passengers and a '+2' bubble
 */
const PASSENGERS_TO_DISPLAY = 5

export type User = {
  avatarUrl: string
  firstName: string
  rating?: string
  isIdChecked?: boolean
}

export type Driver = User & {
  subText?: string
}

type Flags = {
  ladiesOnly?: boolean
  aloneInTheBack?: boolean
  maxTwo?: boolean
  autoApproval?: boolean
}

type FlagTitles = {
  ladiesOnly?: string
  aloneInTheBack?: string
  maxTwo?: string
  autoApproval?: string
}

export type TripCardProps = A11yProps &
  Readonly<{
    href: string | JSX.Element
    itinerary: JSX.Element
    driver?: Driver
    passengers?: Array<User>
    originalPrice?: {
      label: string
      value: string
    }
    price?: string
    flags?: Flags
    titles?: FlagTitles
    className?: string
    statusInformation?: {
      icon: JSX.Element
      text: string
      highlighted?: boolean
    }
    mainTitle?: string
    tag?: string
    subHeader?: string
  }>

const renderPassenger = (passenger: User) => (
  <li className="kirk-tripCard-avatar" key={`${passenger.firstName}-${passenger.avatarUrl}`}>
    <Avatar image={passenger.avatarUrl} alt={passenger.firstName} />
  </li>
)

const renderMorePassengers = (count: number) => (
  <li className="kirk-tripCard-avatar kirk-tripCard-passengers-more" key="more-passengers">
    <Text display={TextDisplayType.BODY} textColor={color.white}>
      +{count}
    </Text>
  </li>
)

const createTransporterProfileProps = (
  driver: Driver,
  flags: Flags = {},
  titles: FlagTitles = {},
): ProfileLeftProps | null => {
  if (!driver) {
    return null
  }

  const options = []
  if (flags.ladiesOnly) {
    options.push({
      icon: <LadyIcon />,
      label: titles.ladiesOnly || '',
    })
  }
  if (flags.aloneInTheBack) {
    options.push({
      icon: <AloneInTheBackIcon />,
      label: titles.aloneInTheBack || '',
    })
  }
  if (flags.maxTwo) {
    options.push({
      icon: <ComfortIcon />,
      label: titles.maxTwo || '',
    })
  }
  if (flags.autoApproval) {
    options.push({
      icon: <LightningIcon />,
      label: titles.autoApproval || '',
    })
  }
  return {
    displayName: driver.firstName,
    pictureUrl: driver.avatarUrl,
    additionalInfo: driver.subText,
    averageRating: driver.rating,
    isIdChecked: driver.isIdChecked,
    options,
  }
}

export const TripCard = (props: TripCardProps) => {
  const {
    className,
    href,
    itinerary,
    driver,
    passengers = [],
    originalPrice,
    price,
    flags = {},
    titles = {},
    statusInformation = null,
    mainTitle = null,
    tag = '',
    subHeader = '',
  } = props
  const a11yAttrs = pickA11yProps<TripCardProps>(props)

  const shouldDisplayPassengers = !isEmpty(passengers)
  const transporterProfileProps = createTransporterProfileProps(driver, flags, titles)
  const shouldDisplayTransporterProfile = !shouldDisplayPassengers && transporterProfileProps

  let componentTag
  let componentProps = {}

  // If we pass a component to href, we get component type and we merge props
  if (typeof href !== 'string') {
    componentTag = href.type
    componentProps = {
      ...href.props,
      rel: 'nofollow',
      ...a11yAttrs,
    }
  } else {
    componentTag = 'a'
    componentProps = {
      href,
      rel: 'nofollow',
      ...a11yAttrs,
    }
  }

  return (
    <Fragment>
      {subHeader && <SubHeader noHorizontalSpacing>{subHeader}</SubHeader>}
      <StyledTripCard className={cc(['kirk-tripCard', className])}>
        {React.createElement(
          componentTag,
          componentProps,
          <Fragment>
            {tag && (
              <StyledCardTag>
                <Tag label={tag} />
              </StyledCardTag>
            )}

            {statusInformation && (
              <Item
                className="kirk-tripCard-top-item"
                leftAddon={React.cloneElement(statusInformation.icon, {
                  iconColor: statusInformation.highlighted ? color.blue : color.lightMidnightGreen,
                })}
                leftTitle={statusInformation.text}
                leftTitleDisplay={TextDisplayType.BODY}
                highlighted={statusInformation.highlighted}
              />
            )}

            {mainTitle && (
              <Text display={TextDisplayType.SUBHEADERSTRONG} className="kirk-tripCard-title">
                {mainTitle}
              </Text>
            )}
            <div className="kirk-tripCard-mainContainer">
              <div className="kirk-tripCard-main">
                <div className="kirk-tripCard-itinerary">{itinerary}</div>
                <Price price={price} originalPrice={originalPrice} />
              </div>

              {shouldDisplayPassengers && (
                <ul className="kirk-tripCard-passengers">
                  {passengers.length > PASSENGERS_TO_DISPLAY &&
                    renderMorePassengers(passengers.length - PASSENGERS_TO_DISPLAY + 1)}
                  {passengers.length === PASSENGERS_TO_DISPLAY &&
                    renderPassenger(passengers[PASSENGERS_TO_DISPLAY - 1])}
                  {passengers
                    .slice(0, PASSENGERS_TO_DISPLAY - 1)
                    .reverse()
                    .map(renderPassenger)}
                </ul>
              )}

              {shouldDisplayTransporterProfile && (
                <ProfileLeft
                  className="kirk-tripCard-profile"
                  {...transporterProfileProps}
                  noHorizontalSpacing
                />
              )}
            </div>
          </Fragment>,
        )}
      </StyledTripCard>
    </Fragment>
  )
}
