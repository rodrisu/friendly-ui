import styled from 'styled-components'

import { color, componentSizes, font, shadow, space, transition } from '../_utils/branding'
import { Button } from './Button'

const borderSize = '2px'

export const StyledButton = styled(Button)`
  & {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    padding: 0 ${space.xl};
    border: 1px solid transparent;
    border-radius: 48px;
    font-size: ${font.base.size};
    line-height: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    height: ${componentSizes.buttonIconSize};
    min-width: ${componentSizes.buttonIconSize};
    max-width: 100%;
    overflow: hidden;
    user-select: none;
    align-items: center;
    transition: max-width ${transition.duration.fast} ease-in,
      background-color ${transition.duration.base} ease-in;
    white-space: nowrap;
  }

  & svg,
  & img {
    flex-shrink: 0;
  }

  & svg {
    margin-right: ${space.m};
  }

  &.kirk-button-bubble svg {
    margin: 0;
  }

  &.kirk-itemChoice {
    border-radius: 0;
    overflow: visible;
    width: 100%;
  }

  &:hover,
  &:active {
    outline: 0;
  }

  &.kirk-button-unstyled {
    background-color: transparent;
    border-radius: inherit;
    color: ${color.blue};
    padding: inherit;
    display: inherit;
    line-height: inherit;
    font-size: inherit;
    text-align: left;
    min-width: inherit;
    min-height: inherit;
    height: auto;
    white-space: normal;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  /* for unstyled disabled buttons, no opacity decrease (mainly icon buttons) */
  &.kirk-button-unstyled[disabled] {
    opacity: 1;
  }

  &.kirk-button-primary {
    background-color: ${color.blue};
    color: ${color.white};
  }

  &.kirk-button-shadowed {
    border: ${borderSize} solid ${color.white};
    box-shadow: ${shadow.default};
    box-sizing: border-box;
  }

  &.kirk-button-primary:hover,
  &.kirk-button-primary:focus,
  &.kirk-button-primary:active {
    background-color: ${color.darkBlue};
  }

  &.kirk-button-secondary {
    background-color: ${color.white};
    border-color: ${color.gray};
    color: ${color.blue};
  }
  &.kirk-button-secondary.kirk-button-shadowed {
    border: none;
  }

  &.kirk-button-secondary:hover,
  &.kirk-button-secondary:focus,
  &.kirk-button-secondary:active {
    background-color: ${color.gray};
  }

  &.kirk-button-tertiary {
    background-color: ${color.white};
    border-color: transparent;
    color: ${color.blue};
  }

  &.kirk-button-tertiary:hover,
  &.kirk-button-tertiary:focus,
  &.kirk-button-tertiary:active {
    background-color: ${color.gray};
  }

  &.kirk-button-loading {
    background-color: transparent;
    max-width: initial;
    border: 0;
  }

  &.kirk-button-loading:hover,
  &.kirk-button-loading:focus,
  &.kirk-button-loading:active {
    background-color: transparent;
  }

  &.kirk-button-loading[disabled],
  &.kirk-button-checked[disabled] {
    opacity: 1;
  }

  & svg.kirk-button-loader {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -24px;
  }

  &.kirk-button-checked {
    border: 0;
  }

  &.kirk-button-warning {
    background-color: ${color.red};
    color: ${color.white};
  }

  &.kirk-button-bubble {
    display: inline-block;
    text-align: center;
    padding: 0;
    line-height: 0;
    width: ${componentSizes.buttonIconSize};
    height: ${componentSizes.buttonIconSize};
  }

  &.kirk-button-bubble.kirk-button-shadowed {
    width: calc(${componentSizes.buttonIconSize} - ${borderSize} * 2);
    height: calc(${componentSizes.buttonIconSize} - ${borderSize} * 2);
  }

  &.kirk-button-facebook {
    background-color: ${color.facebookBrand};
    color: ${color.white};
  }

  &.kirk-button-vkontakte {
    background-color: ${color.vkBrand};
    color: ${color.white};
  }

  @media (hover: none), (hover: on-demand) {
    &.kirk-button-secondary:hover {
      background-color: ${color.white};
    }
  }
`
