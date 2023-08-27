import styled from 'styled-components'

import { radius, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextBody } from '../../../typography/body'
import { TextDisplay1 } from '../../../typography/display1'

const StyledContainer = styled.div`
  margin-top: ${space.xl};
  margin-bottom: ${space.xl};
`

const StyledMedia = styled.div`
  min-height: 320px;
  margin-right: ${space.xl};

  img {
    border-radius: ${radius.s};
    width: 100%;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    min-height: 0;
    margin-left: -${space.xl};
    margin-right: -${space.xl};

    img {
      border-radius: 0;
    }
  }
`

const StyledContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    align-items: center;
  }
`

const StyledTitle = styled(TextDisplay1)`
  margin-bottom: ${space.m};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    margin-top: ${space.xl};
  }
`

const StyledParagraph = styled(TextBody)`
  margin-bottom: ${space.l};
`

export const StyledMediaContentSection = {
  Container: StyledContainer,
  Media: StyledMedia,
  Content: StyledContent,
  Title: StyledTitle,
  Paragraph: StyledParagraph,
}
