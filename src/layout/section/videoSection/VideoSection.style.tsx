import styled from 'styled-components'

import { radius, responsiveBreakpoints, space } from '../../../_utils/branding'
import { normalizeHorizontally } from '../../../layout/layoutNormalizer'
import { BaseSection } from '../../../layout/section/baseSection'
import { TextDisplay1 } from '../../../typography/display1'

const VIDEO_MAX_HEIGHT = '320px'

const StyledSection = styled(BaseSection)`
  margin-top: ${space.xl};
  margin-bottom: ${space.xl};

  & .section-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding: ${space.xl} 0;
  }
`

const StyledTitle = styled(TextDisplay1)`
  ${normalizeHorizontally};
  margin-bottom: ${space.xxl};
  text-align: center;
  width: 100%;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    text-align: left;
  }
`

const StyledVideoContainer = styled.video`
  background-color: #000;
  border-radius: ${radius.l};
  width: calc(100% - ${space.xxl});
  max-height: ${VIDEO_MAX_HEIGHT};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      width: calc(50% - ${space.xl});
    }
  }
`

const StyledTextContainer = styled.div`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      width: 50%;
    }
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding-top: ${space.l};
  }
`

export const StyledVideoSection = {
  Section: StyledSection,
  Title: StyledTitle,
  Video: StyledVideoContainer,
  Text: StyledTextContainer,
}
