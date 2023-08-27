import styled from 'styled-components'

import { color, space } from '../../_utils/branding'
import { normalizeHorizontally } from '../../layout/layoutNormalizer'
import { Item } from './Item'

const StyledItem = styled(Item)`
  /* HorizontalNormalization */
  & {
    ${normalizeHorizontally}
  }

  & {
    position: relative;
    display: flex;
    padding-top: ${space.l};
    padding-bottom: ${space.l};
    align-items: center;
    flex: 1;
    border: 0;
    background: none;
    white-space: pre-line;
  }

  &.kirk-item--clickable:hover {
    cursor: pointer;
    background: ${color.lightGray};
  }

  &.kirk-item--hideHoverBackground.kirk-item--clickable:hover {
    background: none;
  }

  &.kirk-item--wrappable {
    flex-flow: wrap;
    padding-top: ${space.m};
    padding-bottom: ${space.m};

    .kirk-item-leftWrapper {
      padding-top: ${space.m};
      padding-bottom: ${space.m};
    }

    .kirk-item-leftText {
      margin-right: ${space.xl};
    }

    .kirk-item-rightText {
      margin-left: 0;
      margin-top: ${space.m};
      margin-bottom: ${space.m};
      text-align: left;
    }
  }

  .kirk-item-tagToken {
    display: block;
    padding-bottom: ${space.s};
  }

  &:disabled {
    cursor: default;
    background-color: ${color.defaultBackground};
  }

  a& {
    background: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }
  /* Button tag fixes */
  button& {
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  button:focus:not(.focus-visible)& {
    outline: none;
  }

  /* Text areas */

  & .kirk-item-leftWrapper {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }

  & .kirk-item-leftText {
    flex: 1;
  }

  & .kirk-item-rightText {
    margin-left: ${space.l};
    text-align: right;
  }

  /* Text */
  & .kirk-text {
    display: block;
  }

  & .kirk-item-title--withBody {
    margin-bottom: ${space.s};
  }

  & .kirk-item--strikethrough {
    text-decoration: line-through;
  }

  & .kirk-item-title--withButtonAddon {
    position: relative;
  }

  /* Addons */
  & .kirk-item-leftAddon,
  & .kirk-item-rightAddon {
    display: inline-flex;
    min-width: 24px;
    align-items: center;
  }

  & .kirk-item-leftAddon {
    margin-right: ${space.l};
    /* //icons */
    color: ${color.mindNightGreen};
  }

  & .kirk-item-rightAddon {
    margin-left: ${space.l};
  }

  & .kirk-item-rightText--withAddon {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: ${space.m};
    }
  }

  /* Highlighted state */
  &.kirk-item--highlighted .kirk-text-title {
    color: ${color.blue};
  }

  /* Button info */
  & .kirk-item-title--withButtonAddon button {
    position: absolute;
    width: 24px;
    height: 24px;
    margin-left: ${space.s};
    bottom: 0;
  }
`

export { ItemStatus } from './Item'
export { StyledItem as Item }
