import React from 'react'

import { render, screen } from '@testing-library/react'

import { VideoSection, VideoSectionProps } from './index'

const props: VideoSectionProps = {
  title: 'Tutorial Section Title',
  sources: [
    {
      src: 'https://cdn.blablacar.com/kairos/assets/videos/newbie-lp/fr_FR.webm',
      type: 'video/webm',
    },
    {
      src: 'https://cdn.blablacar.com/kairos/assets/videos/newbie-lp/fr_FR.mp4',
      type: 'video/mp4',
    },
  ],
  children: <p>Hello World!</p>,
}

// Issue with Jest and muted attribute on video elements
// https://github.com/testing-library/react-testing-library/issues/470
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
})

describe('VideoSection', () => {
  it('Should render the Tutorial Section and its children', () => {
    render(<VideoSection {...props} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Tutorial Section Title')
    expect(screen.getByText('Hello World!')).toBeInTheDocument()

    const videoElement = screen.getByTestId('videoElement')
    expect(videoElement).toHaveAttribute('controls', '')
    // expect(videoElement).toHaveAttribute('muted', '') muted can't be tested because of polyfill for Jest
    expect(videoElement.children).toHaveLength(2)
    expect(videoElement.children[0]).toHaveAttribute(
      'src',
      'https://cdn.blablacar.com/kairos/assets/videos/newbie-lp/fr_FR.webm',
    )
    expect(videoElement.children[1]).toHaveAttribute(
      'src',
      'https://cdn.blablacar.com/kairos/assets/videos/newbie-lp/fr_FR.mp4',
    )
  })
})
