import styled from 'styled-components'

import { color } from '../_utils/branding'
import { Text } from './Text'

const StyledText = styled(Text).attrs<
  {
    /**
     * Switch colors based on backgournd
     */
    isInverted?: boolean
  },
  { isInverted?: boolean }
>(props => props)`
  white-space: pre-line;

  & {
    color: ${props => (props.isInverted ? color.white : '')};
  }
`

export { StyledText as Text }
