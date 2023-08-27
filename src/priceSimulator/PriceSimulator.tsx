import React, { Fragment } from 'react'

import { PriceSimulatorIllustration } from '../illustration/priceSimulator'
import { BaseSection, SectionContentSize } from '../layout/section/baseSection'
import { SearchFormProps } from '../searchForm'
import { TheVoice } from '../theVoice'
import { StyledPriceSimulator } from './PriceSimulator.style'

export type PriceSimulatorProps = Readonly<{
  title: string
  illustration?: JSX.Element | null
  terms?: JSX.Element | string | null
  children: React.ReactElement<SearchFormProps>
}>

export const PriceSimulator = ({ title, illustration, terms, children }: PriceSimulatorProps) => {
  return (
    <StyledPriceSimulator.Container>
      <BaseSection contentSize={SectionContentSize.LARGE} noHorizontalSpacing>
        <TheVoice>{title}</TheVoice>

        <StyledPriceSimulator.Columns>
          <StyledPriceSimulator.Form>{children}</StyledPriceSimulator.Form>

          <StyledPriceSimulator.Illustration hasDefaultIllustration={!illustration}>
            {illustration && (
              <Fragment>
                {illustration}
                <StyledPriceSimulator.Caption>{terms}</StyledPriceSimulator.Caption>
              </Fragment>
            )}
            {!illustration && <PriceSimulatorIllustration />}
          </StyledPriceSimulator.Illustration>
        </StyledPriceSimulator.Columns>
      </BaseSection>
    </StyledPriceSimulator.Container>
  )
}
