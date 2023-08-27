import React from 'react'

import { StyledSubHeader } from './SubHeader.style'

export type SubHeaderProps = Readonly<{
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any> // from styled-components types
  noHorizontalSpacing?: boolean
}>

export const SubHeader = ({ children, as = 'h2', noHorizontalSpacing }: SubHeaderProps) => (
  <StyledSubHeader as={as} noHorizontalSpacing={noHorizontalSpacing}>
    {children}
  </StyledSubHeader>
)
