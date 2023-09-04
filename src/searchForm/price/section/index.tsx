import styled from 'styled-components'

import { sectionBaseStyle } from '../../baseStyles'
import { PriceSection } from './PriceSection'

const StyledPriceSection = styled(PriceSection)`
  & {
    ${sectionBaseStyle};
  }
`

export { StyledPriceSection as PriceSection }
