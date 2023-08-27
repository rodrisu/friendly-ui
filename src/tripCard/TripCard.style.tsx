import styled from 'styled-components'

import { Card } from '../_internals/card'
import { color, horizontalSpace, radius, space } from '../_utils/branding'
import { TextBodyStrikethrough } from '../typography/bodyStrikethrough'
import { TextTitleStrong } from '../typography/titleStrong'

export const StyledTripCard = styled(Card)`
  & {
    position: relative;
  }

  & a {
    display: block;
    height: 100%;
    padding: ${space.l};
    text-decoration: none;
  }

  &.kirk-tripCard--with-badge {
    position: relative;
    padding-top: ${space.xl};
  }

  & .kirk-tripCard-badge {
    position: absolute;
    top: 0;
    background: ${color.blue};
    padding: ${space.s} ${space.m};
    border-radius: 0 0 ${radius.m} ${radius.m};
  }

  & .kirk-tripCard-profile {
    padding-top: ${space.m};
    padding-bottom: 0;
  }

  & .kirk-item.kirk-tripCard-top-item {
    padding-top: 0;
    padding-left: 0 !important;
  }

  & .kirk-item--highlighted .kirk-text-body {
    color: ${color.blue};
  }

  & .kirk-tripCard-title + .kirk-tripCard-mainContainer {
    margin-top: ${space.m};
  }

  & .kirk-tripCard-mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .kirk-tripCard-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .kirk-tripCard-itinerary {
    min-width: 0; /* reset flex default to allow shrinking below content width */
    position: relative;
    left: -${space.xl}; // Counters normalization of Itinerary component
  }

  & .kirk-tripCard-discount {
    color: ${color.blue};
  }

  & .kirk-tripCard-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .kirk-tripCard-passengers {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0; /* reset flex default to allow shrinking below content width */
  }

  /* We reverse the passengers array to display the 1st one on top without touching z-indexes */
  & .kirk-tripCard-passengers {
    flex-direction: row-reverse;
    justify-content: flex-end;
    list-style-type: none;
  }

  & .kirk-tripCard-passengers .kirk-tripCard-avatar {
    margin-right: -${space.m};
  }

  & .kirk-tripCard-passengers .kirk-avatar {
    border: 2px solid ${color.white};
    background: ${color.white};
  }

  & .kirk-tripCard-passengers .kirk-tripCard-passengers-more {
    background: ${color.midnightGreen};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid ${color.white};
    line-height: 38px;
    text-align: center;
  }
`

export const StyledPrice = styled(TextTitleStrong)<{ $hasDiscount?: boolean }>`
  display: block;
  flex-shrink: 0;
  padding-top: ${space.m};
  ${props => (props.$hasDiscount ? `color: ${color.blue}` : '')};
  white-space: nowrap;
`

export const StyledCardTag = styled.div`
  padding-bottom: ${space.m};
`

export const StyledOriginalPrice = styled(TextBodyStrikethrough)`
  white-space: nowrap;
`

export const StyledTripCardContainer = styled.li<{
  noHorizontalSpacing: boolean
}>`
  padding-left: ${props => (props.noHorizontalSpacing ? space.s : horizontalSpace.global)};
  padding-right: ${props => (props.noHorizontalSpacing ? space.s : horizontalSpace.global)};
`
