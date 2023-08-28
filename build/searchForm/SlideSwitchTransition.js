"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideSwitchTransition = exports.SlideSwitchTransitionSide = void 0;
var React = __importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var SlideSwitchTransitionSide;
(function (SlideSwitchTransitionSide) {
    SlideSwitchTransitionSide["TOP"] = "top";
    SlideSwitchTransitionSide["RIGHT"] = "right";
    SlideSwitchTransitionSide["BOTTOM"] = "bottom";
    SlideSwitchTransitionSide["LEFT"] = "left";
})(SlideSwitchTransitionSide || (exports.SlideSwitchTransitionSide = SlideSwitchTransitionSide = {}));
var DIRECTION_TRANSFORM_VALUES = (_a = {},
    _a[SlideSwitchTransitionSide.TOP] = { in: 'translateY(0)', out: 'translateY(-100%)' },
    _a[SlideSwitchTransitionSide.RIGHT] = { in: 'translateX(0)', out: 'translateX(100%)' },
    _a[SlideSwitchTransitionSide.BOTTOM] = { in: 'translateY(0)', out: 'translateY(100%)' },
    _a[SlideSwitchTransitionSide.LEFT] = { in: 'translateX(0)', out: 'translateX(-100%)' },
    _a);
var AnimatedDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 1;\n  transform: ", ";\n  transition-property: opacity, transform;\n  transition-duration: ", "ms;\n\n  &.slide-enter {\n    opacity: 0;\n    transform: ", ";\n  }\n\n  &.slide-enter-active {\n    opacity: 1;\n    transform: ", ";\n    transition-timing-function: ease-out;\n  }\n\n  &.slide-exit {\n    opacity: 1;\n    transform: ", ";\n  }\n\n  &.slide-exit-active {\n    opacity: 0;\n    transform: ", ";\n    transition-timing-function: ease-in;\n  }\n"], ["\n  opacity: 1;\n  transform: ", ";\n  transition-property: opacity, transform;\n  transition-duration: ", "ms;\n\n  &.slide-enter {\n    opacity: 0;\n    transform: ", ";\n  }\n\n  &.slide-enter-active {\n    opacity: 1;\n    transform: ", ";\n    transition-timing-function: ease-out;\n  }\n\n  &.slide-exit {\n    opacity: 1;\n    transform: ", ";\n  }\n\n  &.slide-exit-active {\n    opacity: 0;\n    transform: ", ";\n    transition-timing-function: ease-in;\n  }\n"])), function (p) { var _a; return (_a = p.transform) === null || _a === void 0 ? void 0 : _a.in; }, function (p) { return p.transitionDuration; }, function (p) { var _a; return (_a = p.transform) === null || _a === void 0 ? void 0 : _a.out; }, function (p) { var _a; return (_a = p.transform) === null || _a === void 0 ? void 0 : _a.in; }, function (p) { var _a; return (_a = p.transform) === null || _a === void 0 ? void 0 : _a.in; }, function (p) { var _a; return (_a = p.transform) === null || _a === void 0 ? void 0 : _a.out; });
function SlideSwitchTransition(_a) {
    var childrenKey = _a.childrenKey, _b = _a.side, side = _b === void 0 ? SlideSwitchTransitionSide.BOTTOM : _b, _c = _a.transitionDuration, transitionDuration = _c === void 0 ? branding_1.TransitionDuration.BASE : _c, children = _a.children;
    return (React.createElement(react_transition_group_1.SwitchTransition, null,
        React.createElement(react_transition_group_1.CSSTransition, { key: childrenKey, timeout: transitionDuration, classNames: "slide" },
            React.createElement(AnimatedDiv, { transform: DIRECTION_TRANSFORM_VALUES[side], transitionDuration: transitionDuration }, children))));
}
exports.SlideSwitchTransition = SlideSwitchTransition;
var templateObject_1;
