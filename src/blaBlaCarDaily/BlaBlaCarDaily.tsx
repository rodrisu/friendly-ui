import React from 'react'

import { BlaBlaCarDailyIllustration } from '../illustration/blaBlaCarDaily'
import { BaseSection, SectionContentSize } from '../layout/section/baseSection'
import { StyledBlaBlaCarDaily } from './BlaBlaCarDaily.style'

export type BlaBlaCarDailyProps = Readonly<{
  content: Readonly<{
    title: JSX.Element | string
    paragraph: JSX.Element | string
    link: string
  }>
  href: JSX.Element | string
}>

export const BlaBlaCarDaily = ({ content, href }: BlaBlaCarDailyProps) => {
  const { title, paragraph, link } = content

  return (
    <StyledBlaBlaCarDaily.Container>
      <BaseSection contentSize={SectionContentSize.LARGE} noHorizontalSpacing>
        <StyledBlaBlaCarDaily.Wrapper>
          <StyledBlaBlaCarDaily.Illustration>
            <BlaBlaCarDailyIllustration />
          </StyledBlaBlaCarDaily.Illustration>

          <StyledBlaBlaCarDaily.Content>
            <StyledBlaBlaCarDaily.Title as="h2">{title}</StyledBlaBlaCarDaily.Title>
            <StyledBlaBlaCarDaily.Paragraph as="p">{paragraph}</StyledBlaBlaCarDaily.Paragraph>
            <StyledBlaBlaCarDaily.Link action={link} href={href} />
          </StyledBlaBlaCarDaily.Content>
        </StyledBlaBlaCarDaily.Wrapper>
      </BaseSection>
    </StyledBlaBlaCarDaily.Container>
  )
}
