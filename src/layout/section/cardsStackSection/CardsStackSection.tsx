import React from 'react'

import { StyledCardsStackSection } from './CardsStackSection.style'

export type CardsStackSectionProps = React.HTMLAttributes<HTMLUListElement>

export const CardsStackSection = ({ children, ...props }: CardsStackSectionProps): JSX.Element => (
  <StyledCardsStackSection {...props}>{children}</StyledCardsStackSection>
)
