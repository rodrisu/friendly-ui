"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMarqueeItem = exports.StyledMarquee = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
// Total animation duration:
// 3400ms fully visible + 320ms slideInOut
var animationDuration = 3720;
exports.StyledMarquee = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  &:hover li {\n    animation-play-state: paused;\n  }\n"], ["\n  position: relative;\n\n  &:hover li {\n    animation-play-state: paused;\n  }\n"])));
exports.StyledMarqueeItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* animation steps defined by how many items are passed */\n  @keyframes slideInOutWait {\n    0% {\n      left: 50%;\n    }\n\n    /* fully visible starting at 160ms */\n    ", " {\n      left: 0;\n      opacity: 1;\n    }\n\n    /* stays visible until 160ms before the end */\n    ", " {\n      left: 0;\n      opacity: 1;\n    }\n\n    /* end of animation, entering waiting queue */\n    ", " {\n      left: -50%;\n      opacity: 0;\n    }\n\n    100% {\n      left: -50%;\n    }\n  }\n\n  /* first item is relative to set a proper height */\n  position: ", ";\n  top: 0;\n  left: 0;\n  opacity: 0;\n  animation-name: slideInOutWait;\n  animation-duration: ", ";\n  animation-iteration-count: infinite;\n  animation-delay: ", ";\n  width: 100%;\n  ", ";\n"], ["\n  /* animation steps defined by how many items are passed */\n  @keyframes slideInOutWait {\n    0% {\n      left: 50%;\n    }\n\n    /* fully visible starting at 160ms */\n    ", " {\n      left: 0;\n      opacity: 1;\n    }\n\n    /* stays visible until 160ms before the end */\n    ", " {\n      left: 0;\n      opacity: 1;\n    }\n\n    /* end of animation, entering waiting queue */\n    ", " {\n      left: -50%;\n      opacity: 0;\n    }\n\n    100% {\n      left: -50%;\n    }\n  }\n\n  /* first item is relative to set a proper height */\n  position: ", ";\n  top: 0;\n  left: 0;\n  opacity: 0;\n  animation-name: slideInOutWait;\n  animation-duration: ", ";\n  animation-iteration-count: infinite;\n  animation-delay: ", ";\n  width: 100%;\n  ", ";\n"])), function (props) { return "".concat(5.8125 / props.totalItems, "%"); }, function (props) { return "".concat(94.1875 / props.totalItems, "%"); }, function (props) { return "".concat(100 / props.totalItems, "%"); }, function (props) { return (props.position === 0 ? 'relative' : 'absolute'); }, function (props) { return "".concat(animationDuration * props.totalItems, "ms"); }, function (props) { return "".concat(animationDuration * props.position, "ms"); }, layoutNormalizer_1.normalizeHorizontally);
var templateObject_1, templateObject_2;
