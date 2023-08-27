import styled from 'styled-components'

import { Card } from '../_internals/card'
import { color, componentSizes, responsiveBreakpoints, space, transition } from '../_utils/branding'
import { TextBody } from '../typography/body'

const StyledContainer = styled.div`
  background: ${color.midnightGreen};
  padding: ${space.xl} 0 0;
`

const StyledContent = styled.div`
  display: flex;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    flex-direction: column;
  }
`

const StyledIllustration = styled.div`
  @media (${responsiveBreakpoints.isMediaSmall}) {
    padding: 0 ${space.xl};
    text-align: center;

    img {
      max-width: 100%;
    }
  }
`

const StyledTestimonialsList = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${space.xl};
  flex-shrink: 1;

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & button {
      display: none !important;
    }
  }
`

export const StyledCard = styled(Card)`
  position: relative;
  overflow: hidden;
  margin: 0 ${space.xl};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    width: 100%;
    margin: ${space.xl} 0 0;
  }
`

export const StyledCarousel = styled.ul<{ activeTestimonial: number; testimonialCount: number }>`
  position: relative;
  width: calc(100% * ${({ testimonialCount }) => testimonialCount});
  left: calc(-100% * ${({ activeTestimonial }) => activeTestimonial});
  transition: left ${transition.duration.base} ${transition.easing.default};

  & li {
    display: inline-block;
    width: calc(100% / ${({ testimonialCount }) => testimonialCount});
    padding: ${space.xl};
  }

  & figure {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    height: 100%;
  }

  & blockquote {
    flex: 1;
  }
`

const StyledAuthor = styled(TextBody)`
  display: block;
  color: ${color.midnightGreen};
  padding-top: ${space.xl};
`

const StyledBulletList = styled.ul`
  padding: ${space.l} 0;
  display: flex;
  justify-content: center;

  & li + li {
    margin-left: ${space.m};
  }
`

const StyledBullet = styled.li<{ active: boolean }>`
  width: ${componentSizes.bulletSizeSmall};
  height: ${componentSizes.bulletSizeSmall};
  border: 1px solid ${color.white};
  border-radius: 50%;
  background: ${({ active }) => (active ? color.white : 'transparent')};
  transition: background ${transition.duration.base} ${transition.easing.default};
`

export const StyledTestimonials = {
  Container: StyledContainer,
  Content: StyledContent,
  Illustration: StyledIllustration,
  Testimonials: StyledTestimonialsList,
  Card: StyledCard,
  Carousel: StyledCarousel,
  Author: StyledAuthor,
  BulletList: StyledBulletList,
  Bullet: StyledBullet,
}
