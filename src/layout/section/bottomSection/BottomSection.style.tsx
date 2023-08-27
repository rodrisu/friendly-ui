import styled from 'styled-components'

import { color, space } from '../../../_utils/branding'

const StyledContainer = styled.div`
  /* stylelint-disable declaration-block-no-duplicate-properties */
  position: -webkit-sticky;
  position: sticky;
  /* stylelint-enable */

  flex: 1 100%;
  bottom: 0;
  background: ${color.white};
  z-index: 2;
  border-top: 1px solid ${color.lightGray};
`

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  padding: ${space.l} 0;
`

export const StyledBottomSection = {
  Container: StyledContainer,
  Content: StyledContent,
}
