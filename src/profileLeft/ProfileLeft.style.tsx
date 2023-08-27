import styled from 'styled-components'

import { Item } from '../_internals/item'
import { color, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledProfileLeft = styled(Item)`
  ${normalizeHorizontally};
`

export const StyledSubInfo = styled.span`
  display: flex;
  margin-top: ${space.s};
`

export const StyledRatingLabel = styled.span`
  margin-left: ${space.m};
`

export const StyledOptionList = styled.ul`
  color: ${color.lightMidnightGreen};
  margin-left: ${space.m};
`

export const StyledOption = styled.li`
  display: inline-block;
  margin-left: ${space.m};
`
