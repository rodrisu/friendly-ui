import styled from 'styled-components'

import { color, responsiveBreakpoints, space } from '../_utils/branding'
import { TextCaption } from '../typography/caption'

const StyledContainer = styled.div`
  background-color: ${color.lightBlue};
  padding-bottom: ${space.xxl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding-top: ${space.xl};
  }
`

const StyledColumns = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    flex-direction: column;
    padding: 0 ${space.xl};
  }
`

const StyledSearchForm = styled.div`
  width: 360px;
  flex-shrink: 0;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    width: 100%;
  }
`

const StyledIllustration = styled.div<{ hasDefaultIllustration: boolean }>`
  width: 400px;
  text-align: center;

  img {
    margin: 0 auto;
  }

  ${props =>
    props.hasDefaultIllustration &&
    `
    position: relative;
    width: 100%;

    svg {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      max-height: none;

      @media (${responsiveBreakpoints.isMediaSmall}) {
        position: static;
      }
    }
  `};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    width: 100%;
    margin-top: ${space.xl};

    img {
      max-width: 100%;
    }
  }
`

const StyledCaption = styled(TextCaption)`
  display: block;
  margin-top: ${space.xl};
  text-align: left;

  &:before {
    display: inline;
    content: '*';
  }
`

export const StyledPriceSimulator = {
  Container: StyledContainer,
  Columns: StyledColumns,
  Form: StyledSearchForm,
  Illustration: StyledIllustration,
  Caption: StyledCaption,
}
