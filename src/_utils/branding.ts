type Color = {
  [propName: string]: string
}

export const color: Color = {
  white: '#FFF',
  gray: '#DDD',
  lightGray: '#EDEDED',
  midnightGreen: '#054752',
  midnightGreenDetail: '#3D5C62',
  lightMidnightGreen: '#708C91',
  blue: '#00AFF5',
  darkBlue: '#008FC1',
  boostBlue: '#2ED1FF',
  green: '#5DD167',
  orange: '#F78B00',
  yellow: '#FFCA0C',
  red: '#F53F5B',
  lightRed: '#FDD8DE',
  facebookBrand: '#1877F2',
  vkBrand: '#2787F5',
  blaBlaCarDailyBrand: '#00D8A7',
  blaBlaCarDailyBrandText: '#30004B',
  tapHighlight: 'rgba(221, 221, 221, .4)', // gray, 40%
  lightBlue: '#ADECFE',
}

export const gradientColors = {
  blueGradient: `linear-gradient(80.19deg, ${color.boostBlue} 4.92%, ${color.blue} 95.98%)`,
}

type Font = {
  [key: string]: {
    size: string
    lineHeight: string
  }
}

type defaultBranding = {
  [key: string]: string
}

export const CDN_FONTS_BASE_URL = 'https://cdn.blablacar.com/kairos/assets/build/fonts'

export const font: Font = {
  s: {
    size: '13px',
    lineHeight: '16px',
  },
  base: {
    size: '16px',
    lineHeight: '20px',
  },
  m: {
    size: '18px',
    lineHeight: '20px',
  },
  l: {
    size: '22px',
    lineHeight: '24px',
  },
  xl: {
    size: '30px',
    lineHeight: String(Math.floor((32 / 30) * 100) / 100),
  },
  brand: {
    size: '56px',
    lineHeight: '56px',
  },
  xxl: {
    size: '82px',
    lineHeight: '82px',
  },
}

export const fontWeight: defaultBranding = {
  regular: '400',
  medium: '500',
}

export const space: defaultBranding = {
  none: '0',
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
  xxl: '48px',
}

export const horizontalSpace: defaultBranding = {
  inner: '8px',
  outer: '16px',
  global: '24px',
}

export const radius: defaultBranding = {
  none: '0',
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
}

// In milliseconds.
export enum TransitionDuration {
  BASE = 200,
  FAST = 500,
}

export const transition = {
  duration: {
    base: `${TransitionDuration.BASE}ms`,
    fast: `${TransitionDuration.FAST}ms`,
  },
  easing: {
    default: 'ease-in',
  },
  callbackDelay: 1000,
}

export const delay = {
  timeout: {
    base: '400ms',
  },
  interval: {
    base: '100ms',
  },
}

export const componentSizes = {
  timeWidth: '48px',
  buttonIconSize: '48px',
  bulletSize: '10px',
  bulletSizeSmall: '8px',
  bulletSizeMap: '18px',
  bulletSizeSearch: '18px',
  roadWidth: '4px',
  smallSectionWidth: '662px',
  largeSectionWidth: '1016px',
  modalTopPadding: '70px',
  searchOverlayWidth: '375px',
  headerHeight: {
    small: '56px',
    large: '72px',
  },
  headerWidth: {
    small: '100%',
    large: '1280px',
  },
  drawerWidth: {
    small: '100%',
    large: '350px',
  },
}

export const modalSize = {
  s: '400px',
  m: '662px',
  l: '928px',
}

export const shadow: defaultBranding = {
  default: '0 2px 4px rgba(0, 0, 0, .3)',
  icon: '0 0 2px rgba(0, 0, 0, .3)',
  card: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)',
  cardHover: '0 2pt 8pt rgba(0, 0, 0, 0.08), 0 2pt 16pt rgba(0, 0, 0, 0.08)',
  searchForm: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)',
  slideSection: '0 4px 4px rgba(0, 0, 0, .25)',
}

export const inputBorderSize = {
  default: '1px',
  focus: '3px',
}

const largeBreakPointThreshold = '800px'
const smallBreakPointThreshold = '799px'
export const responsiveBreakpoints = {
  small: smallBreakPointThreshold,
  isMediaLarge: `min-width: ${largeBreakPointThreshold}`,
  isMediaSmall: `max-width: ${smallBreakPointThreshold}`,
}

export const selectHeight = '52px'

export const pxToInteger = (size: string): number => parseInt(size.replace('px', ''), 10)

export const branding = {
  color,
  font,
  fontWeight,
  space,
  radius,
  shadow,
}
