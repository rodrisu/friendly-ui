import React from 'react'

import { StyledTag } from './Tag.style'

export type TagProps = Readonly<{
  label: string
}>

export const Tag = ({ label }: TagProps) => {
  return <StyledTag>{label}</StyledTag>
}
