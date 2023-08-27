import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, space } from '../../../_utils/branding'

const wrapperHorizontalPadding = space.xl

export const StyledCardsSection = styled.div`
  & {
    background-color: ${color.lightGray};
  }

  & .kirk-cardsSection {
    margin: auto;
    display: flex;
    justify-content: start;
    padding: 0 ${wrapperHorizontalPadding};
    box-sizing: border-box;
    overflow: auto; /* Make Cards scrollable horizontally */
    -ms-overflow-style: none; /* Remove scrollbar visually IE 10+ */
    scrollbar-width: none; /* Remove scrollbar visually Firefox */
    scroll-snap-type: x mandatory;
    scroll-padding: ${space.xl};
  }

  & .kirk-cardsSection .kirk-cardItem {
    scroll-snap-align: start;
  }

  /* Remove scrollbar webkit */
  & .kirk-cardsSection::-webkit-scrollbar {
    display: none;
  }

  & .kirk-card {
    position: relative;
  }

  & .kirk-cardItem {
    display: flex;
    flex-direction: column;
    padding: 0 ${space.s} ${space.m} ${space.s};
    flex: 1;
  }

  /* The browser does not add right padding at the end of the scroll, CSS solution:
  * https://blog.alexandergottlieb.com/overflow-scroll-and-the-right-padding-problem-a-css-only-solution-6d442915b3f4
  */
  & .kirk-card:last-child::after {
    content: '';
    display: block;
    position: absolute;
    right: -${wrapperHorizontalPadding};
    width: ${wrapperHorizontalPadding};
    height: 1px;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-cardsSection {
      max-width: ${componentSizes.smallSectionWidth};
      justify-content: center;
    }
    & .kirk-cardItem {
      overflow: hidden;
    }

    &.kirk-cardsSection-wrapper--large .kirk-cardsSection {
      max-width: ${componentSizes.largeSectionWidth};
    }
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-cardItem {
      min-width: calc(100% - ${space.m});
    }
  }
`
