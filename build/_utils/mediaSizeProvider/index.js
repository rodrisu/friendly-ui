"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaSizeProvider = exports.useIsLargeMediaSize = exports.useIsSmallMediaSize = exports.MediaSizeContext = exports.MediaSize = void 0;
var react_1 = __importStar(require("react"));
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var branding_1 = require("../branding");
var MediaSize;
(function (MediaSize) {
    MediaSize["SMALL"] = "small";
    MediaSize["LARGE"] = "large";
})(MediaSize || (exports.MediaSize = MediaSize = {}));
var DEFAULT_MEDIA_SIZE = MediaSize.SMALL;
exports.MediaSizeContext = react_1.default.createContext(DEFAULT_MEDIA_SIZE);
var DEBOUNCE_VALUE = 500;
var useIsSmallMediaSize = function () {
    var mediaSize = react_1.default.useContext(exports.MediaSizeContext);
    return mediaSize === MediaSize.SMALL;
};
exports.useIsSmallMediaSize = useIsSmallMediaSize;
var useIsLargeMediaSize = function () {
    var mediaSize = react_1.default.useContext(exports.MediaSizeContext);
    return mediaSize === MediaSize.LARGE;
};
exports.useIsLargeMediaSize = useIsLargeMediaSize;
var computeMediaSizeFromViewport = function () {
    var isSmall = window.innerWidth <= parseInt(branding_1.responsiveBreakpoints.small, 10);
    return isSmall ? MediaSize.SMALL : MediaSize.LARGE;
};
// Provides a media size based on the client viewport size to nested components.
// Use dedicated hooks useIsSmallMediaSize and/or useIsLargeMediaSize to get this media size.
// If the MediaSizeProvider is rendered server side, no viewport is available and a default media
// size will be sent. This default server side media size can be changed with serverSideMediaSize
// props.
var MediaSizeProvider = function (props) {
    var children = props.children, serverSideMediaSize = props.serverSideMediaSize, mediaSizeForTestsOnly = props.mediaSizeForTestsOnly;
    var _a = (0, react_1.useState)(serverSideMediaSize || DEFAULT_MEDIA_SIZE), mediaSize = _a[0], setMediaSize = _a[1];
    var updateMediaSize = function () {
        setMediaSize(computeMediaSizeFromViewport());
    };
    (0, react_1.useLayoutEffect)(function () {
        if (!window) {
            // Server side rendering, no need to execute the client-side effects.
            return function () { };
        }
        // Initial client-side update.
        updateMediaSize();
        // Register listener for screen resize events.
        var debouncedHandleResize = (0, lodash_debounce_1.default)(updateMediaSize, DEBOUNCE_VALUE);
        window.addEventListener('resize', debouncedHandleResize);
        return function () {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, []);
    if (mediaSizeForTestsOnly) {
        // When mediaSizeForTestsOnly is set for tests, override any previous logic.
        return (react_1.default.createElement(exports.MediaSizeContext.Provider, { value: mediaSizeForTestsOnly }, children));
    }
    return react_1.default.createElement(exports.MediaSizeContext.Provider, { value: mediaSize }, children);
};
exports.MediaSizeProvider = MediaSizeProvider;
