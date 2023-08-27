import styled from 'styled-components'

import { horizontalSpace, space } from '../../_utils/branding'

export const StyledCardContainer = styled.li<{ noHorizontalSpacing: boolean }>`
  padding-left: ${props => (props.noHorizontalSpacing ? space.s : horizontalSpace.global)};
  padding-right: ${props => (props.noHorizontalSpacing ? space.s : horizontalSpace.global)};
`
