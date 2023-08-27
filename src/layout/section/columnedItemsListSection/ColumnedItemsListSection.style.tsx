import styled from 'styled-components'

import { color, font, space } from '../../../_utils/branding'
import { Button } from '../../../button'
import { ItemChoice } from '../../../itemChoice'
import { ItemsList } from '../../../itemsList'
import { TextDisplay1 } from '../../../typography/display1'

export const Wrapper = styled.div``

export const MainTitle = styled(TextDisplay1)`
  padding: ${space.l} 0 ${space.xl};
`

export const SubTitle = styled.div`
  padding: 0 0 ${space.l};
  font-size: ${font.m.size};
  color: ${color.lightMidnightGreen};
`

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const List = styled(ItemsList)`
  flex-grow: 1;
  flex-basis: 100%;
`

export const ListItemChoice = styled(ItemChoice)<{ hidden: boolean }>`
  flex-grow: 1;
  display: ${props => props.hidden && 'none'};
`

export const Toggle = styled(Button)`
  && {
    padding: ${space.m} 0 ${space.l};
  }
`

export const StyledColumnedItemsListSection = {
  Wrapper,
  MainTitle,
  SubTitle,
  ListWrapper,
  List,
  ListItemChoice,
  Toggle,
}
