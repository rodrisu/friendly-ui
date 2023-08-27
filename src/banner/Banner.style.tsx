import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, space } from '../_utils/branding'
import { TextDisplay1 } from '../typography/display1'
import { TextTitle } from '../typography/title'
import frame from './phone-frame.svg'

export const StyledBanner = styled.section`
  background-color: ${color.boostBlue};
  padding: ${space.xxl} ${space.xl} 0 ${space.xl};

  overflow: hidden;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    min-height: 19.625rem; //314px magic number
  }
`

const Heading = styled(TextDisplay1)`
  margin-bottom: ${space.xl};
`
const Intro = styled(TextTitle)`
  margin-bottom: ${space.xl};
`
const Actions = styled.div`
  margin: ${space.xl} 0;
  text-align: center;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    text-align: left;
  }

  > button:first-child {
    margin-right: ${space.l};
  }
`
const phoneTop = '64px'
export const Frame = styled.div`
  padding: ${phoneTop} ${space.xl} 0 ${space.xl};
  background: no-repeat top center url(${frame});
  background-size: cover;
  width: 225px;
  height: 268px;
  margin: auto;
`
/** LAYOUT */
export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${componentSizes.largeSectionWidth};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    display: flex;
    justify-content: space-between;
  }
`
export const Media = styled.div`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    width: 50%;
    align-self: flex-end;
  }
`

export const Body = styled.div`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    width: 50%;
  }
`

export const BannerElements = {
  Content,
  Media,
  Body,
  Heading,
  Intro,
  Frame,
  Actions,
}
