import React, { useRef, useState } from 'react'
import isEmpty from 'lodash.isempty'
import uniqueId from 'lodash.uniqueid'

import { ButtonStatus } from '../../../button'
import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { StyledColumnedItemsListSection } from './ColumnedItemsListSection.style'

const COLLAPSED_LIST_SIZE = 3

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type ColumnedItemsListSlugItem = Readonly<{
  label: string | JSX.Element
  slugLink: JSX.Element
}>

export type ColumnedItemsListLinkItem = Readonly<{
  label: string
  href: string
}>

export type ColumnedItemsListInfo = Readonly<{
  mainTitle?: string
  subTitle?: string
  list: Array<ColumnedItemsListSlugItem | ColumnedItemsListLinkItem>
}>

export type ColumnedItemsListSectionProps = {
  itemsListInfo: ColumnedItemsListInfo
  expandLabel?: string
  columns?: number
  useExpandToggle?: boolean
  headingLevel?: HeadingLevel
  displayListOnly?: boolean
  redirectToSlug?: string
  sectionContentSize?: SectionContentSize
}

/**
 * A dedicated section including an items list that can be spread into X columns and collapsed after Y results
 */
export const ColumnedItemsListSection = ({
  expandLabel = null,
  itemsListInfo,
  columns = 1,
  useExpandToggle = false,
  headingLevel = 'h1',
  displayListOnly = false,
  sectionContentSize = SectionContentSize.SMALL,
}: ColumnedItemsListSectionProps) => {
  const { mainTitle, subTitle, list } = itemsListInfo
  const itemListId = useRef<string>(uniqueId('item-list-'))
  const [isExpanded, setIsExpanded] = useState(!useExpandToggle)

  const displayExpandedList = () => {
    setIsExpanded(!isExpanded)
  }

  const showToggle = useExpandToggle && !isExpanded && list.length > COLLAPSED_LIST_SIZE
  const nbItemsPerColumn = Math.ceil(list.length / columns)
  const columnsArray = Array.from(Array(columns).keys())
  let countItems = 0

  const itemsPerColumn = columnsArray.map(col => {
    let items = []

    if (col === 0) {
      items = list.slice(0, nbItemsPerColumn)
    } else if (col === columns - 1) {
      items = list.slice(nbItemsPerColumn * col, list.length)
    } else {
      items = list.slice(nbItemsPerColumn * col, nbItemsPerColumn * (col + 1))
    }

    return items
  })

  function isSlugItem(
    item: ColumnedItemsListSlugItem | ColumnedItemsListLinkItem,
  ): item is ColumnedItemsListSlugItem {
    return (item as ColumnedItemsListSlugItem).slugLink !== undefined
  }

  function isLinkItem(
    item: ColumnedItemsListSlugItem | ColumnedItemsListLinkItem,
  ): item is ColumnedItemsListLinkItem {
    return (item as ColumnedItemsListLinkItem).href !== undefined
  }

  return (
    <StyledColumnedItemsListSection.Wrapper>
      {!displayListOnly && (mainTitle || subTitle) && (
        <BaseSection contentSize={sectionContentSize}>
          {mainTitle && (
            <StyledColumnedItemsListSection.MainTitle as={headingLevel}>
              {mainTitle}
            </StyledColumnedItemsListSection.MainTitle>
          )}

          {subTitle && (
            <StyledColumnedItemsListSection.SubTitle>
              {subTitle}
            </StyledColumnedItemsListSection.SubTitle>
          )}
        </BaseSection>
      )}

      <BaseSection contentSize={sectionContentSize} noHorizontalSpacing>
        <StyledColumnedItemsListSection.ListWrapper>
          {itemsPerColumn.map((columnItems, index) => {
            // if there's only one result to display but 2 columns are required,
            // the second column is empty and needs to be ignored
            if (isEmpty(columnItems)) {
              return null
            }

            return (
              <StyledColumnedItemsListSection.List
                id={`${itemListId.current}-${index}`}
                key={uniqueId('item-list-column-')}
              >
                {columnItems.map(item => {
                  countItems += 1
                  const collapsed = countItems > COLLAPSED_LIST_SIZE && !isExpanded

                  if (isSlugItem(item)) {
                    return (
                      <StyledColumnedItemsListSection.ListItemChoice
                        key={item.label.toString()}
                        label={item.label}
                        href={item.slugLink}
                        hidden={collapsed}
                        aria-hidden={collapsed}
                      />
                    )
                  }

                  if (isLinkItem) {
                    // Use onClick Js listener instead of an anchor to make sure these links
                    // are not SEO friendly.
                    return (
                      <StyledColumnedItemsListSection.ListItemChoice
                        key={item.label.toString()}
                        label={item.label}
                        onClick={(): void => {
                          window.open(item.href)
                        }}
                        hidden={collapsed}
                        aria-hidden={collapsed}
                      />
                    )
                  }

                  return (
                    <StyledColumnedItemsListSection.ListItemChoice
                      key={item.label.toString()}
                      label={item.label}
                      hidden={collapsed}
                      aria-hidden={collapsed}
                    />
                  )
                })}
              </StyledColumnedItemsListSection.List>
            )
          })}
        </StyledColumnedItemsListSection.ListWrapper>
      </BaseSection>

      {showToggle && (
        <BaseSection>
          <StyledColumnedItemsListSection.Toggle
            status={ButtonStatus.UNSTYLED}
            aria-expanded={isExpanded}
            aria-controls={itemListId.current}
            onClick={(): void => displayExpandedList()}
          >
            {expandLabel && expandLabel}
          </StyledColumnedItemsListSection.Toggle>
        </BaseSection>
      )}
    </StyledColumnedItemsListSection.Wrapper>
  )
}
