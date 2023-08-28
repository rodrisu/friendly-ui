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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusVisibleProvider = exports.FocusVisibleContext = exports.FOCUS_VISIBLE_CSS_CLASS = void 0;
var react_1 = __importStar(require("react"));
var keycodes_1 = require("../keycodes");
// A React hook based on: https://github.com/WICG/focus-visible
var pointerMoveEventList = [
    'mousedown',
    'mouseup',
    'pointermove',
    'pointerdown',
    'pointerup',
    'touchmove',
    'touchstart',
    'touchend',
];
var pointerDownEventList = ['mousedown', 'pointerdown', 'touchstart'];
exports.FOCUS_VISIBLE_CSS_CLASS = 'focus-visible';
exports.FocusVisibleContext = (0, react_1.createContext)(false);
var FocusVisibleProvider = function (_a) {
    var children = _a.children, setGlobalClassName = _a.setGlobalClassName;
    // When the provider first loads, assume the user is in pointer modality.
    var _b = (0, react_1.useState)(false), hadKeyboardEvent = _b[0], setHadKeyboardEvent = _b[1];
    if (setGlobalClassName) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useEffect)(function () {
            // Add a 'focus-visible' CSS class on the <body> element.
            document.body.classList.toggle(exports.FOCUS_VISIBLE_CSS_CLASS, hadKeyboardEvent);
        }, [hadKeyboardEvent]);
    }
    (0, react_1.useEffect)(function () {
        var lastClientX;
        var lastClientY;
        var onPointerDown = function () {
            setHadKeyboardEvent(false);
        };
        var onInitialPointerMove = function () {
            setHadKeyboardEvent(false);
        };
        var getLastMouseMove = function (e) {
            // Ensure the mouse has actually moved (Safari)
            // https://transitory.technology/mouse-move-in-safari/
            if (lastClientX === e.clientX && lastClientY === e.clientY) {
                return;
            }
            lastClientX = e.clientX;
            lastClientY = e.clientY;
        };
        var addInitialPointerMoveListeners = function () {
            document.addEventListener('mousemove', function (event) {
                getLastMouseMove(event);
                // eslint-disable-next-line no-unused-expressions
                onInitialPointerMove;
            });
            pointerMoveEventList.forEach(function (e) { return document.addEventListener(e, onInitialPointerMove); });
        };
        var removeInitialPointerMoveListeners = function () {
            document.removeEventListener('mousemove', function (event) {
                getLastMouseMove(event);
                // eslint-disable-next-line no-unused-expressions
                onInitialPointerMove;
            });
            pointerMoveEventList.forEach(function (e) { return document.removeEventListener(e, onInitialPointerMove); });
        };
        var onKeyDown = function (e) {
            var element = e.target;
            var isTypingArea = element.tagName === 'TEXTAREA' || (element.tagName === 'INPUT' && element.type === 'text');
            // Remove Spacebar and Enter keys in case of text editing
            var keysList = isTypingArea
                ? keycodes_1.KEYS_TRIGGERING_KEYBOARD_NAVIGATION.filter(function (key) { return key !== keycodes_1.KEYS.SPACEBAR && key !== keycodes_1.KEYS.ENTER; })
                : keycodes_1.KEYS_TRIGGERING_KEYBOARD_NAVIGATION;
            if (keysList.includes(e.key)) {
                setHadKeyboardEvent(true);
            }
        };
        // For some kinds of state, we are interested in changes at the global
        // scope only. Global pointer input and global key presses change
        // should affect the state at every scope.
        document.addEventListener('keydown', onKeyDown, true);
        pointerDownEventList.forEach(function (e) { return document.addEventListener(e, onPointerDown, true); });
        addInitialPointerMoveListeners();
        return function () {
            document.removeEventListener('keydown', onKeyDown, true);
            pointerDownEventList.forEach(function (e) { return document.removeEventListener(e, onPointerDown, true); });
            removeInitialPointerMoveListeners();
        };
    }, []);
    return (react_1.default.createElement(exports.FocusVisibleContext.Provider, { value: hadKeyboardEvent }, children));
};
exports.FocusVisibleProvider = FocusVisibleProvider;
