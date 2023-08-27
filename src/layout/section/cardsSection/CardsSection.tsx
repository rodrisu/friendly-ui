import React from 'react'
import cc from 'classcat'

import { StyledCardContainer } from '../../../_internals/card/Card.style'
import { SectionContentSize } from '../../../layout/section/baseSection'
import { QrCardProps } from '../../../qrCard'
import { TripCardProps } from '../../../tripCard'
import { StyledCardsSection } from './CardsSection.style'

type CardsProps = TripCardProps | QrCardProps
type ChildrenProps = Array<React.ReactElement<CardsProps>> | React.ReactElement<CardsProps>

export type CardsSectionProps = Readonly<{
  children: ChildrenProps
  className?: string
  contentSize?: SectionContentSize
}>

export const CardsSection = ({
  children,
  className = '',
  contentSize = SectionContentSize.SMALL,
}: CardsSectionProps) => (
  <StyledCardsSection
    className={cc([
      'kirk-cardsSection-wrapper',
      {
        'kirk-cardsSection-wrapper--large': contentSize === SectionContentSize.LARGE,
      },
      className,
    ])}
  >
    <ul className={cc(['kirk-cardsSection'])}>
      {React.Children.map(children, (child: JSX.Element) => (
        <StyledCardContainer className="kirk-cardItem" noHorizontalSpacing>
          {child}
        </StyledCardContainer>
      ))}
    </ul>
  </StyledCardsSection>
)
