import React, { useEffect, useRef } from 'react'

import { useInView } from '../../../_utils/useInView'
import { SectionContentSize } from '../../../layout/section/baseSection'
import { StyledVideoSection } from './VideoSection.style'

export type VideoSectionProps = Readonly<{
  title: string
  sources: Array<HTMLSourceElement>
  children: React.ReactNode
  className?: string
}>

/**
 * A specialized section which shows a tutorial video alongside some descriptive content.
 */
export const VideoSection: React.SFC<VideoSectionProps> = ({
  children,
  sources,
  title,
  className = '',
}: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>()
  const inViewport = useInView(videoRef, {
    threshold: 1,
  })

  // Automatically play the video when the container is visible on screen
  useEffect(() => {
    if (inViewport) {
      videoRef.current.play()
    } else if (!videoRef.current.paused) {
      videoRef.current.pause()
    }
  }, [inViewport])

  return (
    <StyledVideoSection.Section
      tagName="article"
      className={className}
      contentSize={SectionContentSize.LARGE}
      noHorizontalSpacing
    >
      <StyledVideoSection.Title as="h2">{title}</StyledVideoSection.Title>
      <StyledVideoSection.Video
        controls
        muted
        ref={videoRef}
        data-testid="videoElement"
        aria-hidden
      >
        {sources.map(source => (
          <source src={source.src} type={source.type} key={source.src} />
        ))}
      </StyledVideoSection.Video>
      <StyledVideoSection.Text>{children}</StyledVideoSection.Text>
    </StyledVideoSection.Section>
  )
}
