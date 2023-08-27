import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextTitle = styled(Text).attrs<
  {
    /**
     * Ligthen the text color to emphasis on disabled state
     * */
    isDisabled?: boolean
  },
  { isDisabled?: boolean }
>(props => props)`
  color: ${props => (props.isDisabled ? color.gray : color.midnightGreen)};
  font-size: ${font.m.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.m.lineHeight};
`
