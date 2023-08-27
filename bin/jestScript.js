const { config } = require('react-transition-group')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

require('@testing-library/jest-dom')
require('jest-date-mock')
require('jest-styled-components')

// Make sure transitions are immediate.
config.disabled = true

Enzyme.configure({ adapter: new Adapter() })

let previousInnerWidth

beforeEach(() => {
  previousInnerWidth = window.innerWidth
})

afterEach(() => {
  window.innerWidth = previousInnerWidth
})

// Mocking matchMedia not implemented by JSDOM
// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
