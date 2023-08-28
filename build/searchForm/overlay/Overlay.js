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
exports.Overlay = void 0;
var react_1 = __importStar(require("react"));
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var useReducedMotion_1 = require("../../_internals/useReducedMotion");
var transitionConfig_1 = require("../transitionConfig");
var Overlay = function (_a) {
    var closeOnBlur = _a.closeOnBlur, shouldDisplay = _a.shouldDisplay, children = _a.children, className = _a.className;
    var overlayRef = (0, react_1.useRef)(null);
    var reducedMotion = (0, useReducedMotion_1.useReducedMotion)();
    return (react_1.default.createElement("div", { ref: overlayRef, onBlur: function (evt) {
            if (!overlayRef.current.contains(evt.relatedTarget)) {
                closeOnBlur();
            }
        }, className: className },
        react_1.default.createElement(CSSTransition_1.default, { in: shouldDisplay, classNames: transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, timeout: reducedMotion ? transitionConfig_1.reducedMotionTransitionDuration : transitionConfig_1.transitionOverlayTimeout, mountOnEnter: true, unmountOnExit: true }, children)));
};
exports.Overlay = Overlay;
