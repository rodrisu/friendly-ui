import styled from 'styled-components'

import { Card } from '../_internals/card'
import { color, font, responsiveBreakpoints, space } from '../_utils/branding'
import { ItemAction } from '../itemAction'
import { TextDisplay1 } from '../typography/display1'
import { TextSubHeaderStrong } from '../typography/subHeaderStrong'
import { TextTitleStrong } from '../typography/titleStrong'

const StyledContainer = styled.div`
  background: ${color.lightBlue};
  padding: ${space.xxl} 0;

  svg {
    max-width: 50%;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding: ${space.xl} ${space.xl};

    svg {
      max-width: none;
    }
  }
`

const StyledCard = styled(Card)`
  padding: ${space.xl} 0;
  position: relative;
  top: -4px;
`

const StyledTitle = styled(TextDisplay1)`
  padding: 0 ${space.xl} ${space.xxl};
`

const StyledSubTitle = styled(TextSubHeaderStrong)`
  padding: 0 ${space.xl} ${space.l};
`

const StyledTerms = styled(ItemAction)``

const StyledStepsTitle = styled(TextTitleStrong)`
  padding: ${space.l} ${space.xl};

  img {
    vertical-align: middle;
    max-height: ${font.xl.size};
    margin-left: ${space.s};
  }
`

const StyledSteps = styled.ul`
  display: flex;
  align-items: flex-start;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    flex-direction: column;
  }
`

const StyledButton = styled.div`
  text-align: center;
  padding-top: ${space.xl};
`

export const StyledTotalVoucher = {
  Container: StyledContainer,
  Card: StyledCard,
  Title: StyledTitle,
  SubTitle: StyledSubTitle,
  Terms: StyledTerms,
  StepsTitle: StyledStepsTitle,
  Steps: StyledSteps,
  Button: StyledButton,
}
