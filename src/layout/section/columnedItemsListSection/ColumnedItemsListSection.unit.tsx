import React from 'react'

import { fireEvent, render, screen, within } from '@testing-library/react'

import {
  ColumnedItemsListInfo,
  ColumnedItemsListSection,
  ColumnedItemsListSectionProps,
} from './index'

export const itemsListInfo: ColumnedItemsListInfo = {
  mainTitle: 'Main title',
  subTitle: 'Sub title',
  list: [
    {
      href: 'https://www.blablacar.pt/',
      label: 'Link item 1',
    },
    {
      href: 'https://www.blablacar.pt/',
      label: 'Veryyyyyyyyyyyyyy Loooooooong link item 2',
    },
    {
      slugLink: <a href="#lug-item-1">slug-item-1</a>,
      label: 'Slug item 1',
    },
    {
      slugLink: <a href="#lug-item-2">slug-item-2</a>,
      label: 'Looong slug item 2',
    },
    {
      slugLink: <a href="#lug-item-3">slug-item-3</a>,
      label: 'Looooooooong slug item 3',
    },
  ],
}

const defaultProps: ColumnedItemsListSectionProps = {
  itemsListInfo,
}

describe('ColumnedItemsListSection', () => {
  it('should render a section with Title, SubTitle and full list', () => {
    render(<ColumnedItemsListSection {...defaultProps} />)

    const list = screen.getByRole('list')
    const listItems = within(list).getAllByRole('listitem')

    expect(screen.getByRole('heading', { level: 1, name: 'Main title' })).toBeInTheDocument()
    expect(screen.getByText('Sub title')).toBeInTheDocument()
    expect(listItems).toHaveLength(5)
  })

  it('should render a section with only the full list', () => {
    render(<ColumnedItemsListSection {...defaultProps} displayListOnly />)

    const list = screen.getByRole('list')
    const listItems = within(list).getAllByRole('listitem')

    expect(screen.queryByRole('heading', { level: 1, name: 'Main title' })).not.toBeInTheDocument()
    expect(screen.queryByText('Sub title')).not.toBeInTheDocument()
    expect(listItems).toHaveLength(5)
  })

  it('should render a section with the full list splitted in 2 columns', () => {
    render(<ColumnedItemsListSection {...defaultProps} columns={2} />)

    const lists = screen.getAllByRole('list')
    expect(lists).toHaveLength(2)
  })

  it('should render a section with a collapsed list', () => {
    render(<ColumnedItemsListSection {...defaultProps} useExpandToggle expandLabel="Expand" />)

    const expandButton = screen.getByRole('button', { name: 'Expand' })
    expect(expandButton).toBeInTheDocument()

    const list = screen.getByRole('list')
    const listLinkItems = within(list).getAllByRole('button')
    const listSlugItems = within(list).getAllByRole('link')

    expect(listLinkItems).toHaveLength(2)
    expect(listSlugItems).toHaveLength(1)

    fireEvent.click(expandButton)

    expect(expandButton).not.toBeInTheDocument()

    const expandedlist = screen.getByRole('list')
    const expandedListLinkItems = within(expandedlist).getAllByRole('button')
    const expandedListSlugItems = within(expandedlist).getAllByRole('link')

    expect(expandedListLinkItems).toHaveLength(2)
    expect(expandedListSlugItems).toHaveLength(3)
  })
})
