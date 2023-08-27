import styled from 'styled-components'

import { color, radius, space } from '../../_utils/branding'
import { TextBody } from '../../typography/body'

export const StyledTag = styled(TextBody).attrs({ isInverted: true })`
  background-color: ${color.blue};
  padding: ${space.xs} ${space.m};
  border-radius: ${radius.m};
`
