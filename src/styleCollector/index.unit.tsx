import React from 'react'
import ReactDOM from 'react-dom/server'
import styled from 'styled-components'

import * as StyleCollector from './index'

describe('style-collector', () => {
  beforeAll(() => {
    // Hack to avoid error on testing SSR in JSDom with styled-components
    // (see: https://github.com/styled-components/styled-components/issues/1692)
    // Same hack is used by jest-styled-component, and there is no incentive to remove it, for now
    const { StyleSheet: StyledComponentsStyleSheet } =
      // eslint-disable-next-line global-require
      require('styled-components').__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS

    StyledComponentsStyleSheet.reset(true)
  })

  it('should extract style tag', () => {
    const App = styled.div`
      background: red;
    `

    const styleCollector = StyleCollector.init()

    ReactDOM.renderToString(styleCollector.wrapComponent(<App />))

    const styleTag = styleCollector.extractStyleTag()

    expect(styleTag).toEqual(`<style data-styled="iRJHJT" data-styled-version="4.4.1">
/* sc-component-id: sc-bdVaJa */
.iRJHJT{background:red;}</style>`)
  })
})
