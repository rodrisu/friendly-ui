import styled from 'styled-components'

import { color, responsiveBreakpoints, space } from '../_utils/branding'
import { TextBody } from '../typography/body'
import { TextDisplay1 } from '../typography/display1'

const StyledContainer = styled.div`
  background: ${color.midnightGreen};
`

const StyledWrapper = styled.div`
  display: flex;
  padding: ${space.xxl} ${space.xl};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    flex-direction: column;
  }
`

const StyledIllustration = styled.div`
  text-align: center;
  padding-left: ${space.xl};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    order: 0;
    padding-left: 0;

    img {
      max-width: 100%;
    }
  }
`

const StyledContent = styled.div`
  flex-grow: 1;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    order: 1;
  }
`

const StyledTitle = styled(TextDisplay1).attrs({ as: 'h2' })`
  padding-bottom: ${space.xxl};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding-top: ${space.xxl};
  }
`

const StyledParagraph = styled(TextBody).attrs({ as: 'p' })`
  padding-bottom: ${space.xl};
`

export const StyledHelpers = {
  Container: StyledContainer,
  Wrapper: StyledWrapper,
  Illustration: StyledIllustration,
  Content: StyledContent,
  Title: StyledTitle,
  Paragraph: StyledParagraph,
}
