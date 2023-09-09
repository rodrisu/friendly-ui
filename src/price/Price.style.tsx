import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally, NormalizeProps } from '../layout/layoutNormalizer'
import { PriceButtonSize, PriceDisplay } from './constants'

// These components have a 12px vertical padding. We probably took a shortcut when creating our
// sizes, as we should have handled 4px multiples (checked with @wakooka)
const betweenMandL = '12px'

export const StyledPrice = styled.div<NormalizeProps & { valueColor: string }>`
  ${normalizeHorizontally};
  display: flex;
  position: relative;

  & .kirk-price-content {
    display: flex;
    position: relative;
    flex: 1;
  }

  & .kirk-price-input {
    display: flex;
    position: relative;
    flex: 1;
  }

  & .kirk-price-value {
    display: inline;
    padding: 0 ${space.l};
    margin: 0;
    border: none;
    color: ${props => props.valueColor};
    text-align: center;
    flex-grow: 1;
    align-self: center;
  }

  & .kirk-price-decrement,
  & .kirk-price-increment {
    flex-shrink: 0;
    align-self: center;
    border: none;
  }

  &.kirk-price-small {
    padding: ${betweenMandL} 0;
  }

  &.kirk-price-large .kirk-price-value {
    width: calc(100% - ${PriceButtonSize[PriceDisplay.LARGE]}px * 2);
    flex-grow: 0;
  }
`

export const StyledAddon = styled.div<{ fixNormalization: boolean }>`
  // Vertical align the addon
  display: flex;
  align-items: center;

  // Addon is expending, while price has a fixed size
  flex: 1;
  & + .kirk-price-content {
    flex: 0;
  }

  // Left addon can be a normalized component (with 24px horizontal padding). Let's counter it.
  margin-left: ${props => (props.fixNormalization ? `-${space.xl}` : 0)};
`
