import React from 'react'

import { ButtonProps } from '../../../button'
import { StyledBottomSection } from './BottomSection.style'

export type BottomSectionProps = Readonly<{
  children: React.ReactElement<ButtonProps>
}>

export const BottomSection = ({ children }: BottomSectionProps): JSX.Element => {
  return (
    <StyledBottomSection.Container>
      <StyledBottomSection.Content>{children}</StyledBottomSection.Content>
    </StyledBottomSection.Container>
  )
}
