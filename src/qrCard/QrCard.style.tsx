import styled from 'styled-components'

import { Card } from '../_internals/card'
import { space } from '../_utils/branding'

const qrCardMaxWidth = '450px'

export const StyledQrCard = styled(Card)`
  & .kirk-card {
    display: block;
    padding: ${space.none};
    max-width: ${qrCardMaxWidth};
  }

  & img {
    width: 100%;
    padding: ${space.m} ${space.xl};
  }
`
