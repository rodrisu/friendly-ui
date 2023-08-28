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
exports.SlideSection = exports.SlideSectionPosition = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var grip_1 = require("../../../grip");
var GripHandle_1 = require("../../../grip/GripHandle");
var SlideSection_style_1 = require("./SlideSection.style");
var SMALL_SCREEN_BREAKPOINT = 450;
var SlideSectionPosition;
(function (SlideSectionPosition) {
    SlideSectionPosition["DEFAULT"] = "default";
    SlideSectionPosition["REDUCED"] = "reduced";
    SlideSectionPosition["EXPANDED"] = "expanded";
})(SlideSectionPosition || (exports.SlideSectionPosition = SlideSectionPosition = {}));
var SlideSection = function (props) {
    var children = props.children, media = props.media, _a = props.reducedContent, reducedContent = _a === void 0 ? null : _a, onPositionChange = props.onPositionChange, _b = props.disabledGestures, disabledGestures = _b === void 0 ? false : _b, _c = props.inMotion, inMotion = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(SlideSectionPosition.DEFAULT), position = _d[0], setPosition = _d[1];
    var _e = (0, react_1.useState)(0), fingerOffset = _e[0], setFingerOffset = _e[1];
    var _f = (0, react_1.useState)(false), snapTransition = _f[0], setSnapTransition = _f[1];
    var reducedContentRef = (0, react_1.useRef)(null);
    var layoutRef = (0, react_1.useRef)(null);
    var isScreenTooSmall = layoutRef.current && layoutRef.current.clientHeight <= SMALL_SCREEN_BREAKPOINT;
    (0, react_1.useEffect)(function () {
        // On mobile devices, transitions time induce delay in the screen resizing: we should wait
        // for the transition to be done before deciding if the screen is too small.
        if (!inMotion && isScreenTooSmall && position === SlideSectionPosition.DEFAULT) {
            setPosition(SlideSectionPosition.EXPANDED);
        }
    }, [inMotion, position, isScreenTooSmall]);
    var slideUp = (0, react_1.useCallback)(function () {
        if (position === SlideSectionPosition.DEFAULT) {
            setPosition(SlideSectionPosition.EXPANDED);
        }
        else if (position === SlideSectionPosition.REDUCED && isScreenTooSmall) {
            setPosition(SlideSectionPosition.EXPANDED);
        }
        else if (position === SlideSectionPosition.REDUCED && !isScreenTooSmall) {
            setPosition(SlideSectionPosition.DEFAULT);
        }
        setFingerOffset(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);
    var slideDown = (0, react_1.useCallback)(function () {
        if (position === SlideSectionPosition.DEFAULT) {
            setPosition(SlideSectionPosition.REDUCED);
        }
        else if (position === SlideSectionPosition.EXPANDED && isScreenTooSmall) {
            setPosition(SlideSectionPosition.REDUCED);
        }
        else if (position === SlideSectionPosition.EXPANDED && !isScreenTooSmall) {
            setPosition(SlideSectionPosition.DEFAULT);
        }
        setFingerOffset(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);
    var onGripTouchEnd = (0, react_1.useCallback)(function () {
        setSnapTransition(true);
        setFingerOffset(0);
    }, []);
    // Methods to manually set the panel position from other components
    var setDefaultPosition = (0, react_1.useRef)(function () {
        if (isScreenTooSmall && position === SlideSectionPosition.EXPANDED) {
            setPosition(SlideSectionPosition.REDUCED);
        }
        else if (isScreenTooSmall && position === SlideSectionPosition.REDUCED) {
            setPosition(SlideSectionPosition.EXPANDED);
        }
        else {
            setPosition(SlideSectionPosition.DEFAULT);
        }
    });
    var setReducedPosition = (0, react_1.useRef)(function () { return setPosition(SlideSectionPosition.REDUCED); });
    var setExpandedPosition = (0, react_1.useRef)(function () { return setPosition(SlideSectionPosition.EXPANDED); });
    // Calculating sizes of the panel in different positions
    var _g = (0, react_1.useState)(0), minimalHeight = _g[0], setMinimalHeight = _g[1];
    var _h = (0, react_1.useState)(0), defaultHeight = _h[0], setDefaultHeight = _h[1];
    var _j = (0, react_1.useState)(0), expandedHeight = _j[0], setExpandedHeight = _j[1];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react_1.useEffect)(function () {
        // Reduced height is the height of reducedContent element + GripHandle height
        // On small screen, we only show a 48px height element for touch control
        var reducedContentHeight = isScreenTooSmall
            ? GripHandle_1.GRIP_HANDLE_HEIGHT
            : reducedContentRef.current.clientHeight;
        setMinimalHeight(reducedContentHeight + GripHandle_1.GRIP_HANDLE_HEIGHT);
        // Default height is 50% of media height
        setDefaultHeight((layoutRef.current.clientHeight * 50) / 100);
        // Expanded height is 100% of media height
        setExpandedHeight(layoutRef.current.clientHeight);
    });
    // Triggering onPositionChange
    (0, react_1.useEffect)(function () {
        if (onPositionChange) {
            onPositionChange(position);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);
    // Calculating true position of the list (position and finger offset on move)
    var topOffset = 0;
    if (position === SlideSectionPosition.DEFAULT) {
        topOffset = 0 - defaultHeight + fingerOffset;
    }
    else if (position === SlideSectionPosition.EXPANDED) {
        topOffset = 0 - expandedHeight + fingerOffset;
    }
    else if (position === SlideSectionPosition.REDUCED) {
        topOffset = 0 - minimalHeight + fingerOffset;
    }
    if (topOffset > 0) {
        topOffset = 0;
    }
    else if (topOffset < 0 - expandedHeight) {
        topOffset = 0 - expandedHeight;
    }
    return (react_1.default.createElement(SlideSection_style_1.StyledSlideLayout, { ref: layoutRef },
        media,
        react_1.default.createElement(SlideSection_style_1.StyledSlidePanel, { className: (0, classcat_1.default)([position, { animated: snapTransition }]), expandedHeight: expandedHeight, style: { transform: "translateY(".concat(topOffset, "px)") }, onTransitionEnd: function () {
                setSnapTransition(false);
            } },
            react_1.default.createElement(grip_1.Grip, { onSlideUp: slideUp, onSlideDown: slideDown, onTouchMove: setFingerOffset, onTouchEnd: onGripTouchEnd, disabled: disabledGestures },
                react_1.default.createElement("div", { ref: reducedContentRef }, reducedContent),
                children(setDefaultPosition.current, setReducedPosition.current, setExpandedPosition.current)))));
};
exports.SlideSection = SlideSection;
