import React from 'react'

import { QrCard, QrCardProps } from '../qrCard'
import { BannerElements, StyledBanner } from './Banner.style'

type Copy = Readonly<{ heading: string; paragraph?: string }>

type CTALinks = Array<JSX.Element>
type CTAButtons = Array<JSX.Element>

export type BannerProps = Readonly<{
  copy: Copy
  actions?: CTALinks | CTAButtons
  qrcode?: QrCardProps
}>

export const Banner = ({ copy, actions, qrcode }: BannerProps) => (
  <StyledBanner>
    <BannerElements.Content>
      <BannerElements.Body>
        <BannerElements.Heading as="h2">{copy.heading}</BannerElements.Heading>
        <BannerElements.Intro as="p">{copy.paragraph}</BannerElements.Intro>
        {actions && <BannerElements.Actions>{actions}</BannerElements.Actions>}
      </BannerElements.Body>
      {qrcode && (
        <BannerElements.Media>
          <BannerElements.Frame>
            <QrCard imageUrl={qrcode.imageUrl} mainTitle={qrcode.mainTitle} />
          </BannerElements.Frame>
        </BannerElements.Media>
      )}
    </BannerElements.Content>
  </StyledBanner>
)
