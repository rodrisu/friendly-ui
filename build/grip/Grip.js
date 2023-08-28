"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Grip = exports.touchMoveListener = exports.touchEndListener = exports.SLIDE_OFFSET = void 0;
var react_1 = __importStar(require("react"));
var interfaces_1 = require("../_utils/interfaces");
var GripHandle_1 = require("./GripHandle");
exports.SLIDE_OFFSET = 50;
var touchEndListener = function (clientY, fingerYPosition, resetFingerYPosition, props) {
    var onSlideDown = props.onSlideDown, onSlideUp = props.onSlideUp, onTouchEnd = props.onTouchEnd;
    if (fingerYPosition.current !== null) {
        onTouchEnd();
        if (clientY < fingerYPosition.current - exports.SLIDE_OFFSET) {
            onSlideUp();
        }
        else if (clientY > fingerYPosition.current + exports.SLIDE_OFFSET) {
            onSlideDown();
        }
        resetFingerYPosition();
    }
};
exports.touchEndListener = touchEndListener;
var touchMoveListener = function (clientY, fingerYPosition, props) {
    var onTouchMove = props.onTouchMove;
    if (fingerYPosition.current !== null) {
        onTouchMove(clientY - fingerYPosition.current);
    }
};
exports.touchMoveListener = touchMoveListener;
var Grip = function (props) {
    var onSlideUp = props.onSlideUp, onSlideDown = props.onSlideDown, _a = props.onTouchMove, onTouchMove = _a === void 0 ? function () { } : _a, _b = props.onTouchEnd, onTouchEnd = _b === void 0 ? function () { } : _b, _c = props.children, children = _c === void 0 ? null : _c, _d = props.className, className = _d === void 0 ? '' : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var fingerYPosition = (0, react_1.useRef)(null);
    var resetFingerYPosition = function () {
        fingerYPosition.current = null;
    };
    // Listening to finger moving on the screen and check position
    // difference with starting point
    (0, react_1.useEffect)(function () {
        if (!disabled) {
            var delegatedTouchMoveListener_1 = function (e) {
                return (0, exports.touchMoveListener)(e.changedTouches.item(0).clientY, fingerYPosition, props);
            };
            window.addEventListener('touchmove', delegatedTouchMoveListener_1);
            return function () {
                window.removeEventListener('touchmove', delegatedTouchMoveListener_1);
            };
        }
        return function () { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled, onTouchMove]);
    // Listening to finger being lift from the screen and check position
    // difference with starting point
    (0, react_1.useEffect)(function () {
        if (!disabled) {
            var delegatedTouchEndListener_1 = function (e) {
                return (0, exports.touchEndListener)(e.changedTouches.item(0).clientY, fingerYPosition, resetFingerYPosition, props);
            };
            window.addEventListener('touchend', delegatedTouchEndListener_1);
            return function () {
                window.removeEventListener('touchend', delegatedTouchEndListener_1);
            };
        }
        return function () { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled, onSlideUp, onSlideDown, onTouchEnd]);
    return (react_1.default.createElement("div", __assign({ className: className, onTouchStart: function (e) {
            fingerYPosition.current = e.touches.item(0).clientY;
        } }, a11yAttrs),
        react_1.default.createElement(GripHandle_1.GripHandle, { "aria-hidden": "true" }),
        children));
};
exports.Grip = Grip;
