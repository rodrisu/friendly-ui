import React from 'react'

import { ButtonProps } from '../button'
import { ContentDivider } from '../divider/contentDivider'
import { TotalVoucherIllustration } from '../illustration/totalVoucher'
import { ItemInfo } from '../itemInfo'
import { BaseSection, SectionContentSize } from '../layout/section/baseSection'
import { StyledTotalVoucher } from './TotalVoucher.style'

export type TotalVoucherProps = Readonly<{
  title: string
  subTitle: JSX.Element | string
  terms: Readonly<{
    href: JSX.Element | string
    label: string
  }>
  stepsTitle: JSX.Element | string
  steps: ReadonlyArray<
    Readonly<{
      label: string
      description: string
    }>
  >
  button: React.ReactElement<ButtonProps>
}>

export const TotalVoucher = ({
  title,
  subTitle,
  terms,
  stepsTitle,
  steps,
  button,
}: TotalVoucherProps) => {
  return (
    <StyledTotalVoucher.Container>
      <BaseSection contentSize={SectionContentSize.LARGE} noHorizontalSpacing>
        <TotalVoucherIllustration />
        <StyledTotalVoucher.Card as="div">
          <StyledTotalVoucher.Title as="h2">{title}</StyledTotalVoucher.Title>
          <StyledTotalVoucher.SubTitle as="p">{subTitle}</StyledTotalVoucher.SubTitle>
          <StyledTotalVoucher.Terms action={terms.label} href={terms.href} />

          <ContentDivider />

          <StyledTotalVoucher.StepsTitle as="p">{stepsTitle}</StyledTotalVoucher.StepsTitle>
          <StyledTotalVoucher.Steps>
            {steps.map(
              ({ label, description }): JSX.Element => (
                <ItemInfo tag={<li />} key={label} mainTitle={label} mainInfo={description} />
              ),
            )}
          </StyledTotalVoucher.Steps>

          <StyledTotalVoucher.Button>{button}</StyledTotalVoucher.Button>
        </StyledTotalVoucher.Card>
      </BaseSection>
    </StyledTotalVoucher.Container>
  )
}
