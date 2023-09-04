import styled from 'styled-components'

import { overlayBaseStyle } from '../../baseStyles'
import { PriceOverlay } from './PriceOverlay'

const StyledPriceOverlay = styled(PriceOverlay)`
  & {
    ${overlayBaseStyle}
    position: absolute;
  }
`

export { StyledPriceOverlay as PriceOverlay }
