import React from 'react'
import isEmpty from 'lodash.isempty'

import { A11yProps, pickA11yProps } from '../../_utils/interfaces'
import { TextBody } from '../../typography/body'
import { Bullet } from '../../bullet'
import { TextTitleStrong } from '../../typography/titleStrong'
import { StyledItineraryItem } from './ItineraryItem.style'
import { Line, LineProps } from './Line'

export type ItineraryItemProps = A11yProps &
  LineProps &
  Readonly<{
    time?: string
    timeSubLabelItem?: string
    children: React.ReactNode
    href?: string | JSX.Element
  }>

export const ItineraryItem = ({
  time = null,
  timeSubLabelItem = null,
  prevLine,
  nextLine,
  children,
  bullet = <Bullet />,
  href = null,
  ...props
}: ItineraryItemProps) => {
  // Renders <a>, custom component (SlugLink) or div based on href
  let Wrapper
  let wrapperProps = {}

  if (!isEmpty(href) && typeof href !== 'string') {
    Wrapper = href.type
    wrapperProps = href.props
  } else if (typeof href === 'string') {
    Wrapper = 'a'
    wrapperProps = { href }
  } else {
    Wrapper = 'div'
  }

  return (
    <StyledItineraryItem {...pickA11yProps(props)} hasLink={!!href}>
      <Wrapper {...wrapperProps}>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> DESCOMENTAR SI SE VA A UTILIZAR HORA Y DURACION*/}
        <div>
          <TextTitleStrong as="time" aria-hidden={isEmpty(time)}>
            {time}
          </TextTitleStrong>
          <TextBody as="span" aria-aria-label='Duration of ride'>
            {timeSubLabelItem}
          </TextBody>
        </div>
        <Line prevLine={prevLine} nextLine={nextLine} bullet={bullet} />
        {children}
      </Wrapper>
    </StyledItineraryItem>
  )
}
