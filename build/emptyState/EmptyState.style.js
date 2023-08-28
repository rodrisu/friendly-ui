"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledEmptyState = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledEmptyState = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    text-align: center;\n  }\n\n  & .kirk-title {\n    margin: ", " 0;\n  }\n\n  & img {\n    max-height: 33vh;\n    width: 100%;\n    object-fit: contain;\n  }\n"], ["\n  & {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    text-align: center;\n  }\n\n  & .kirk-title {\n    margin: ", " 0;\n  }\n\n  & img {\n    max-height: 33vh;\n    width: 100%;\n    object-fit: contain;\n  }\n"])), branding_1.space.xl);
var templateObject_1;
