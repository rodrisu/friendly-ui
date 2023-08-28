"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HintBubble = exports.HintBubblePosition = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var interfaces_1 = require("../_utils/interfaces");
var button_1 = require("../button");
var crossIcon_1 = require("../icon/crossIcon");
var HintBubblePosition;
(function (HintBubblePosition) {
    HintBubblePosition["ABOVE"] = "above";
    HintBubblePosition["BELOW"] = "below";
})(HintBubblePosition || (exports.HintBubblePosition = HintBubblePosition = {}));
var HintBubble = function (props) {
    var a11yProps = (0, interfaces_1.pickA11yProps)(props);
    var mainTitle = props.mainTitle, description = props.description, closeButtonTitle = props.closeButtonTitle, position = props.position, className = props.className, onClose = props.onClose;
    return (react_1.default.createElement("aside", __assign({ className: (0, classcat_1.default)([className, "bubble-arrow--".concat(position)]) }, a11yProps),
        react_1.default.createElement("p", null,
            react_1.default.createElement("strong", null, mainTitle),
            description),
        react_1.default.createElement(button_1.Button, { onClick: onClose, title: closeButtonTitle, status: button_1.ButtonStatus.UNSTYLED, "aria-controls": a11yProps.id },
            react_1.default.createElement(crossIcon_1.CrossIcon, { size: 18, iconColor: branding_1.color.white }))));
};
var StyledHintBubble = (0, styled_components_1.default)(HintBubble)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    /* Normalization */\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n\n  & strong {\n    display: block;\n    font-weight: ", ";\n    padding-bottom: ", ";\n  }\n\n  & p {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n  }\n\n  & .kirk-button {\n    padding: 0 0 0 ", ";\n    min-height: 0;\n    height: auto;\n  }\n\n  & .kirk-button svg {\n    margin: 0;\n  }\n\n  &.bubble-arrow--above::after {\n    content: ' ';\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -4px;\n    width: 0;\n    height: 0;\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-top: 8px solid ", ";\n  }\n\n  &.bubble-arrow--below::after {\n    content: ' ';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -4px;\n    width: 0;\n    height: 0;\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-bottom: 8px solid ", ";\n  }\n"], ["\n  & {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    /* Normalization */\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n\n  & strong {\n    display: block;\n    font-weight: ", ";\n    padding-bottom: ", ";\n  }\n\n  & p {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n  }\n\n  & .kirk-button {\n    padding: 0 0 0 ", ";\n    min-height: 0;\n    height: auto;\n  }\n\n  & .kirk-button svg {\n    margin: 0;\n  }\n\n  &.bubble-arrow--above::after {\n    content: ' ';\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -4px;\n    width: 0;\n    height: 0;\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-top: 8px solid ", ";\n  }\n\n  &.bubble-arrow--below::after {\n    content: ' ';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -4px;\n    width: 0;\n    height: 0;\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-bottom: 8px solid ", ";\n  }\n"])), branding_1.space.l, branding_1.color.midnightGreen, branding_1.color.white, branding_1.radius.l, branding_1.shadow.icon, branding_1.horizontalSpace.global, branding_1.horizontalSpace.global, branding_1.fontWeight.medium, branding_1.space.s, branding_1.space.m, branding_1.color.midnightGreen, branding_1.color.midnightGreen);
exports.HintBubble = StyledHintBubble;
var templateObject_1;
