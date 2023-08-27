import React from 'react'

import { Button } from '../../../button'
import { Column } from '../../../layout/column'
import { Columns } from '../../../layout/columns'
import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { StyledMediaContentSection } from './MediaContentSection.style'

export type MediaContentSectionProps = Readonly<{
  media: JSX.Element
  title: string
  content?: string
  buttonLabel?: string
  buttonHref?: string | JSX.Element
  buttonClick?: (event: React.MouseEvent<HTMLElement>) => void
}>

/**
 * A specialized section which show some marketing content associated with a picture.
 */
export const MediaContentSection = ({
  media,
  title,
  content,
  buttonLabel,
  buttonHref,
  buttonClick,
}: MediaContentSectionProps) => {
  const showButton = Boolean(buttonHref && buttonLabel)
  const showParagraph = Boolean(content)

  return (
    <StyledMediaContentSection.Container>
      <BaseSection tagName="article" contentSize={SectionContentSize.LARGE}>
        <Columns>
          <Column>
            <StyledMediaContentSection.Media>{media}</StyledMediaContentSection.Media>
          </Column>
          <Column>
            <StyledMediaContentSection.Content>
              <StyledMediaContentSection.Title>{title}</StyledMediaContentSection.Title>
              {showParagraph && (
                <StyledMediaContentSection.Paragraph as="p">
                  {content}
                </StyledMediaContentSection.Paragraph>
              )}
              {showButton && (
                <Button href={buttonHref} onClick={buttonClick}>
                  {buttonLabel}
                </Button>
              )}
            </StyledMediaContentSection.Content>
          </Column>
        </Columns>
      </BaseSection>
    </StyledMediaContentSection.Container>
  )
}
