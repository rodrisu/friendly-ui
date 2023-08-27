import React, { FunctionComponent } from 'react'
import cc from 'classcat'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { ContentDivider } from '../divider/contentDivider'
import { ItemCheckboxProps } from '../itemCheckbox/ItemCheckbox'
import { ItemChoiceProps } from '../itemChoice'
import { ItemRadioProps } from '../itemRadio/ItemRadio'
import { StyledItemsList } from './ItemsList.style'

export const ItemsListDivider: FunctionComponent = () => null

// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
const ItemsListDividerType = (<ItemsListDivider />).type

export type ItemsListChild =
  | React.ReactElement<ItemChoiceProps>
  | React.ReactElement<ItemRadioProps>
  | React.ReactElement<ItemCheckboxProps>
  | null

type ChildrenType = ItemsListChild | Array<ItemsListChild>

export type ItemsListProps = A11yProps &
  Readonly<{
    children: ChildrenType
    withSeparators?: boolean
    className?: string
    keyGenerator?: (index: number) => string | number
  }>

export const ItemsList = (props: ItemsListProps) => {
  const {
    children,
    className = '',
    withSeparators = false,
    keyGenerator = (i: number) => i,
  } = props
  const a11yAttrs = pickA11yProps<ItemsListProps>(props)

  // Remove all falsy items.
  // Falsy items can be added when using this pattern:
  // <ItemsList>
  //   <SomeItem />
  //   {shouldShowListItem && <SomeItem>} // shouldShowListItem value will be inserted in the list
  //   <SomeItem />
  // </ItemsList>
  const items = Array.isArray(children) ? children : [children]
  const filteredChildren = items.filter(Boolean)
  return (
    <StyledItemsList className={cc(['kirk-items-list', className])} {...a11yAttrs}>
      {filteredChildren.map((item, index) => {
        if (item.type === ItemsListDividerType || item.type === undefined) {
          return null
        }

        const isLast = filteredChildren.length === index + 1
        const hasSeparator =
          !isLast && (filteredChildren[index + 1].type === ItemsListDividerType || withSeparators)

        return (
          <li className={cc(['kirk-items-list-item'])} key={keyGenerator(index)}>
            {item}
            {hasSeparator && <ContentDivider />}
          </li>
        )
      })}
    </StyledItemsList>
  )
}
