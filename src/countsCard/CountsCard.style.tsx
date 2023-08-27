import styled from 'styled-components'

import { Card } from '../_internals/card'
import { color, responsiveBreakpoints, space } from '../_utils/branding'

const StyledContainer = styled.div`
  position: relative;
  padding: ${space.xl} 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${color.midnightGreen};
    z-index: 1;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding: ${space.xl};

    &::after {
      top: 66%;
    }
  }
`

const StyledCard = styled(Card)`
  display: flex;
  position: relative;
  z-index: 2;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    flex-direction: column;
  }
`

const StyledItem = styled.li`
  flex: 1;
  padding: ${space.xl};

  & > * {
    display: block;
  }
`

export const StyledCountsCard = {
  Container: StyledContainer,
  Card: StyledCard,
  Item: StyledItem,
}
