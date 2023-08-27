import styled from 'styled-components'

import { color, responsiveBreakpoints, space } from '../_utils/branding'
import { ItemAction } from '../itemAction'
import { TextBody } from '../typography/body'
import { TextDisplay1 } from '../typography/display1'

const StyledContainer = styled.div`
  background: ${color.blaBlaCarDailyBrand};
`

const StyledWrapper = styled.div`
  display: flex;
  padding: ${space.xxl} ${space.xl};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    flex-direction: column;
    padding-bottom: 0;
  }
`

const StyledIllustration = styled.div`
  text-align: center;
  flex-shrink: 0;
  width: 50%;
  position: relative;

  svg {
    position: absolute;
    bottom: -${space.xxl};
    left: 0;
    max-height: none;
    object-fit: none;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    width: 100%;
    order: 1;

    svg {
      position: static;
    }
  }
`

const StyledContent = styled.div``

const StyledTitle = styled(TextDisplay1)`
  padding: 0 ${space.xl} ${space.xxl};
  color: ${color.blaBlaCarDailyBrandText};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding: 0 0 ${space.xxl} 0;
  }
`

const StyledParagraph = styled(TextBody)`
  padding: 0 ${space.xl} ${space.l};
  color: ${color.blaBlaCarDailyBrandText};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding: 0 0 ${space.l} 0;
  }
`

const StyledLink = styled(ItemAction)`
  // Can't override it otherwise...
  &.kirk-item--highlighted {
    -webkit-tap-highlight-color: transparent;
  }

  &.kirk-item--highlighted .kirk-text-title {
    color: ${color.white};
  }

  &.kirk-item--highlighted:hover {
    background: none;
  }

  &.kirk-item--highlighted:hover .kirk-text-title {
    color: ${color.blaBlaCarDailyBrandText};
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    // To counter normalization which uses !important
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

export const StyledBlaBlaCarDaily = {
  Container: StyledContainer,
  Wrapper: StyledWrapper,
  Illustration: StyledIllustration,
  Content: StyledContent,
  Title: StyledTitle,
  Paragraph: StyledParagraph,
  Link: StyledLink,
}
