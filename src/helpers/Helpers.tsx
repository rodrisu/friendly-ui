import React from 'react'

import { Button, ButtonStatus } from '../button'
import { BaseSection, SectionContentSize } from '../layout/section/baseSection'
import { StyledHelpers } from './Helpers.style'

export type HelpersProps = Readonly<{
  illustration: JSX.Element
  content: Readonly<{
    title: string
    paragraph: string
    button: string
  }>
  onClick: () => void
}>

export const Helpers = ({ illustration, content, onClick }: HelpersProps) => {
  const { title, paragraph, button } = content

  return (
    <StyledHelpers.Container>
      <BaseSection contentSize={SectionContentSize.LARGE} noHorizontalSpacing>
        <StyledHelpers.Wrapper>
          <StyledHelpers.Content>
            <StyledHelpers.Title isInverted>{title}</StyledHelpers.Title>
            <StyledHelpers.Paragraph isInverted>{paragraph}</StyledHelpers.Paragraph>
            <Button status={ButtonStatus.SECONDARY} onClick={onClick}>
              {button}
            </Button>
          </StyledHelpers.Content>

          <StyledHelpers.Illustration>{illustration}</StyledHelpers.Illustration>
        </StyledHelpers.Wrapper>
      </BaseSection>
    </StyledHelpers.Container>
  )
}
