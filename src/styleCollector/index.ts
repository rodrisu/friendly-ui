import React from 'react'
import { ServerStyleSheet } from 'styled-components'

/**
 * Use the StyleCollector to extract style during server-side rendering
 * to have style as soon as the app is rendered (no flickering)
 *
 * This StyleCollectors wrap styled-component API in order to hide this
 * implementation detail from users.
 *
 * @see https://styled-components.com/docs/advanced#server-side-rendering
 *
 * @example

  import * as StyleCollector from '@blablacar/ui-library/dist/serverStyleExtractor'
  import { renderToString } from 'react-dom/server'

  // ...

  const styleCollector = StyleCollector.init()

  try {
    const markup: string = renderToString(
      styleCollector.wrapComponent(<MyApp />)
    )

    const styleTag: string = styleCollector.extractStyleTag()

    // do something
  } catch (error) {
    // do something
  } finally {
    styleCollector.cleanup()
  }
 */
type StyleCollector = {
  wrapComponent: (component: React.ReactNode) => React.ReactElement
  extractStyleTag: () => string
  cleanup: () => void
}

export function init(): StyleCollector {
  const sheet = new ServerStyleSheet()

  return {
    wrapComponent: (component: React.ReactNode) => sheet.collectStyles(component),
    extractStyleTag: () => sheet.getStyleTags(),
    cleanup: () => sheet.seal(),
  }
}
