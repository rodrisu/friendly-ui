"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branding = exports.pxToInteger = exports.selectHeight = exports.responsiveBreakpoints = exports.inputBorderSize = exports.shadow = exports.modalSize = exports.componentSizes = exports.delay = exports.transition = exports.TransitionDuration = exports.radius = exports.horizontalSpace = exports.space = exports.fontWeight = exports.font = exports.CDN_FONTS_BASE_URL = exports.gradientColors = exports.color = void 0;
exports.color = {
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
    tapHighlight: 'rgba(221, 221, 221, .4)',
    lightBlue: '#ADECFE',
};
exports.gradientColors = {
    blueGradient: "linear-gradient(80.19deg, ".concat(exports.color.boostBlue, " 4.92%, ").concat(exports.color.blue, " 95.98%)"),
};
exports.CDN_FONTS_BASE_URL = 'https://cdn.blablacar.com/kairos/assets/build/fonts';
exports.font = {
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
};
exports.fontWeight = {
    regular: '400',
    medium: '500',
};
exports.space = {
    none: '0',
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '16px',
    xl: '24px',
    xxl: '48px',
};
exports.horizontalSpace = {
    inner: '8px',
    outer: '16px',
    global: '24px',
};
exports.radius = {
    none: '0',
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '16px',
    xl: '24px',
};
// In milliseconds.
var TransitionDuration;
(function (TransitionDuration) {
    TransitionDuration[TransitionDuration["BASE"] = 200] = "BASE";
    TransitionDuration[TransitionDuration["FAST"] = 500] = "FAST";
})(TransitionDuration || (exports.TransitionDuration = TransitionDuration = {}));
exports.transition = {
    duration: {
        base: "".concat(TransitionDuration.BASE, "ms"),
        fast: "".concat(TransitionDuration.FAST, "ms"),
    },
    easing: {
        default: 'ease-in',
    },
    callbackDelay: 1000,
};
exports.delay = {
    timeout: {
        base: '400ms',
    },
    interval: {
        base: '100ms',
    },
};
exports.componentSizes = {
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
};
exports.modalSize = {
    s: '400px',
    m: '662px',
    l: '928px',
};
exports.shadow = {
    default: '0 2px 4px rgba(0, 0, 0, .3)',
    icon: '0 0 2px rgba(0, 0, 0, .3)',
    card: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)',
    cardHover: '0 2pt 8pt rgba(0, 0, 0, 0.08), 0 2pt 16pt rgba(0, 0, 0, 0.08)',
    searchForm: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)',
    slideSection: '0 4px 4px rgba(0, 0, 0, .25)',
};
exports.inputBorderSize = {
    default: '1px',
    focus: '3px',
};
var largeBreakPointThreshold = '800px';
var smallBreakPointThreshold = '799px';
exports.responsiveBreakpoints = {
    small: smallBreakPointThreshold,
    isMediaLarge: "min-width: ".concat(largeBreakPointThreshold),
    isMediaSmall: "max-width: ".concat(smallBreakPointThreshold),
};
exports.selectHeight = '52px';
var pxToInteger = function (size) { return parseInt(size.replace('px', ''), 10); };
exports.pxToInteger = pxToInteger;
exports.branding = {
    color: exports.color,
    font: exports.font,
    fontWeight: exports.fontWeight,
    space: exports.space,
    radius: exports.radius,
    shadow: exports.shadow,
};
