import styled from 'styled-components'

import { color, font, inputBorderSize, radius, space, transition } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledTextField = styled.div`
  position: relative;
  box-sizing: border-box;
  ${normalizeHorizontally};
  padding: ${space.m} 0;

  & .kirk-textField-wrapper {
    position: relative;
    display: flex;
    box-sizing: border-box;
    color: ${color.midnightGreen};
    background-color: ${color.lightGray};
    border-radius: ${radius.l};
    border: solid ${inputBorderSize.default} ${color.lightGray};
    box-shadow: none;
  }

  & .kirk-textField-wrapper--hasFocus {
    border: ${inputBorderSize.focus} solid ${color.blue};
  }

  & .kirk-textField-wrapper--hasFocus input,
  & .kirk-textField-wrapper--hasFocus textarea {
    padding: calc(${space.l} + ${inputBorderSize.default} - ${inputBorderSize.focus});
  }

  & .kirk-textField-wrapper--hasFocus input {
    padding-right: 0;
  }

  & input {
    appearance: none;
    border: 0;
    border-radius: ${radius.l};
    background-color: ${color.lightGray};
    color: ${color.midnightGreen};
    flex: 1;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    width: 100%;
    caret-color: ${color.blue};
    padding: ${space.l};
  }

  & input {
    padding-right: 0;
    /* Make sure to override the user agent default font-family on input */
    font-family: inherit;
    /*
    Use margin-right instead of padding-right to fix a cursor bug
    when calling setSelectionRange on Safari Mobile [BBCSPA-1030]
    */
    margin-right: 48px;
  }

  & input:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 0;
  }

  & input::placeholder {
    color: ${color.lightMidnightGreen};
  }

  & input::-ms-clear {
    display: none;
  }

  & input[type='number']::-webkit-outer-spin-button,
  & input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  & input[type='number'] {
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }

  & input[type='search'] {
    width: 100%;
    box-sizing: border-box;
  }

  & input[type='number'],
  & input[type='search'] {
    box-shadow: none;
  }

  & input:focus {
    border-color: ${color.lightGray};
    box-shadow: none;
    outline: none;
  }

  &.kirk-error .kirk-textField-wrapper {
    background: ${color.lightRed};
    border: solid 1px ${color.lightRed};
    animation: textFieldError ${transition.duration.fast} ease-in-out;
  }

  &.kirk-error input {
    background-color: ${color.lightRed};
  }

  &.kirk-error .kirk-error-message {
    color: ${color.red};
    display: block;
    padding: ${space.m};
  }

  & label {
    color: ${color.midnightGreen};
    padding: 0 ${space.m} ${space.s} ${space.m};
  }

  & .kirk-button {
    background-color: transparent;
    color: ${color.lightMidnightGreen};
    height: auto;
  }

  & .kirk-textField-button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }

  & .kirk-textField-button[hidden] {
    /* we use visiblity hidden instead of display none to resolve a display glitch
    on Safari Mobile when clearing input value and hiding button simultaneously */
    visibility: hidden;
  }

  &.kirk-disabled {
    opacity: 0.5;
    cursor: default;
  }

  @keyframes textFieldError {
    20% {
      margin-left: -10px;
      margin-right: 10px;
    }
    40% {
      margin-left: 10px;
      margin-right: -10px;
    }
    60% {
      margin-left: -5px;
      margin-right: 5px;
    }
    80% {
      margin-left: 5px;
      margin-right: -5px;
    }
    100% {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`
