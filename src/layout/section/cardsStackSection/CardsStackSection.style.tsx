import styled from 'styled-components'

import { horizontalSpace, space } from '../../../_utils/branding'

export const StyledCardsStackSection = styled.ul`
  & > * {
    margin-bottom: ${space.m};
  }
  .kirk-cardItem {
    padding-left: ${horizontalSpace.global};
    padding-right: ${horizontalSpace.global};
  }
`
