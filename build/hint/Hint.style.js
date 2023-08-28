"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledHint = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var HintBubble_1 = require("./HintBubble");
exports.StyledHint = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    position: relative;\n  }\n\n  & ", " {\n    position: absolute;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n  & ", ".bubble-arrow--above {\n    bottom: 100%;\n  }\n  & ", ".bubble-arrow--below {\n    top: 100%;\n  }\n"], ["\n  & {\n    position: relative;\n  }\n\n  & ", " {\n    position: absolute;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n  & ", ".bubble-arrow--above {\n    bottom: 100%;\n  }\n  & ", ".bubble-arrow--below {\n    top: 100%;\n  }\n"])), HintBubble_1.HintBubble, HintBubble_1.HintBubble, HintBubble_1.HintBubble);
var templateObject_1;
