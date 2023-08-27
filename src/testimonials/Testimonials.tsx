import React, { useRef, useState } from 'react'

import { color } from '../_utils/branding'
import { Button, ButtonStatus } from '../button'
import { ArrowIcon } from '../icon/arrowIcon'
import { BaseSection, SectionContentSize } from '../layout/section/baseSection'
import { TextSubHeaderStrong } from '../typography/subHeaderStrong'
import { StyledTestimonials } from './Testimonials.style'

const SWIPE_TRESHOLD = 60

type Testimonial = Readonly<{
  quote: string
  author: string
}>

export type TestimonialsProps = Readonly<{
  illustration: JSX.Element
  testimonials: Array<Testimonial>
  a11y: Readonly<{
    mainTitle: string
    prev: string
    next: string
  }>
}>

export const Testimonials = ({ illustration, testimonials, a11y }: TestimonialsProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const touchXInitialPosition = useRef<null | number>(null)
  const touchXPosition = useRef<null | number>(null)

  /**
   * We implemented a loop carousel. Clicking next when we reached the end
   * will make it start at the beginning.
   *
   * Prev & Next methods are called by swiping or by clicking the buttons
   */
  const prev = (): void => {
    const active = activeTestimonial - 1 < 0 ? testimonials.length - 1 : activeTestimonial - 1
    setActiveTestimonial(active)
  }

  const next = (): void => {
    const active = activeTestimonial + 1 > testimonials.length - 1 ? 0 : activeTestimonial + 1
    setActiveTestimonial(active)
  }

  /**
   * Naive swipe implementation. Added a threshold to avoid swiping by just scrolling the page
   */
  const onTouchStart = (e: React.TouchEvent): void => {
    if (e.touches.length === 1) {
      touchXInitialPosition.current = e.touches[0].pageX
    }
  }

  const onTouchMove = (e: React.TouchEvent): void => {
    if (e.touches.length === 1) {
      touchXPosition.current = e.touches[0].pageX
    }
  }

  const onTouchEnd = (): void => {
    if (touchXInitialPosition.current !== null && touchXPosition.current !== null) {
      const diff = touchXPosition.current - touchXInitialPosition.current

      if (Math.abs(diff) > SWIPE_TRESHOLD) {
        if (diff > 0) {
          prev()
        } else {
          next()
        }
      }

      touchXPosition.current = null
      touchXInitialPosition.current = null
    }
  }

  return (
    <StyledTestimonials.Container>
      <BaseSection contentSize={SectionContentSize.LARGE} noHorizontalSpacing>
        <StyledTestimonials.Content>
          <StyledTestimonials.Illustration>{illustration}</StyledTestimonials.Illustration>

          <StyledTestimonials.Testimonials>
            <Button
              status={ButtonStatus.SECONDARY}
              isBubble
              title={a11y.prev}
              onClick={() => prev()}
              aria-hidden
            >
              <ArrowIcon iconColor={color.blue} />
            </Button>

            <StyledTestimonials.Card as="div">
              <StyledTestimonials.Carousel
                activeTestimonial={activeTestimonial}
                testimonialCount={testimonials.length}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                aria-label={a11y.mainTitle}
              >
                {testimonials.map(
                  ({ quote, author }: Testimonial): JSX.Element => (
                    <li key={author}>
                      <figure>
                        <TextSubHeaderStrong as="blockquote">{quote}</TextSubHeaderStrong>
                        <StyledTestimonials.Author as="figcaption">
                          {author}
                        </StyledTestimonials.Author>
                      </figure>
                    </li>
                  ),
                )}
              </StyledTestimonials.Carousel>
            </StyledTestimonials.Card>

            <Button
              status={ButtonStatus.SECONDARY}
              isBubble
              title={a11y.next}
              onClick={() => next()}
              aria-hidden
            >
              <ArrowIcon iconColor={color.blue} right />
            </Button>
          </StyledTestimonials.Testimonials>
        </StyledTestimonials.Content>

        <StyledTestimonials.BulletList aria-hidden>
          {testimonials.map(
            ({ author }: Testimonial, i: number): JSX.Element => (
              <StyledTestimonials.Bullet key={author} active={activeTestimonial === i} />
            ),
          )}
        </StyledTestimonials.BulletList>
      </BaseSection>
    </StyledTestimonials.Container>
  )
}
