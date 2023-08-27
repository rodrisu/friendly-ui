import React from 'react'

import { BaseSection, SectionContentSize } from '../layout/section/baseSection'
import { TextBody } from '../typography/body'
import { TextDisplay1 } from '../typography/display1'
import { StyledCountsCard } from './CountsCard.style'

type CountCard = Readonly<{
  title: string
  description: string
}>

export type CountsCardProps = Readonly<{
  cards: ReadonlyArray<CountCard>
}>

export const CountsCard = ({ cards }: CountsCardProps) => {
  return (
    <StyledCountsCard.Container>
      <BaseSection contentSize={SectionContentSize.LARGE} noHorizontalSpacing>
        <StyledCountsCard.Card as="ul">
          {cards.map(
            ({ title, description }: CountCard): JSX.Element => (
              <StyledCountsCard.Item key={title}>
                <TextDisplay1>{title}</TextDisplay1>
                <TextBody>{description}</TextBody>
              </StyledCountsCard.Item>
            ),
          )}
        </StyledCountsCard.Card>
      </BaseSection>
    </StyledCountsCard.Container>
  )
}
