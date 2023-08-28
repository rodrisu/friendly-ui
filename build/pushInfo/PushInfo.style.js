"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPushInfo = exports.StyledPushInfoWrapper = exports.animationDelay = exports.animationDuration = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.animationDuration = 700;
exports.animationDelay = 300;
exports.StyledPushInfoWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), layoutNormalizer_1.normalizeHorizontally);
exports.StyledPushInfo = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  padding: 0 ", ";\n  max-height: 0;\n  overflow-y: hidden;\n  animation: slide-down ", "ms ease-out ", "ms forwards;\n\n  @keyframes slide-down {\n    0% {\n      max-height: 0;\n    }\n    100% {\n      max-height: 300px;\n      padding-top: ", ";\n      padding-bottom: ", ";\n    }\n  }\n\n  .kirk-pushInfo-headline {\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    margin: 0 0 ", ";\n  }\n\n  .kirk-pushInfo-headline--standalone {\n    margin: 0;\n  }\n\n  .kirk-pushInfo-content {\n    margin: 0;\n  }\n\n  .kirk-pushInfo-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    min-width: 40px;\n    height: 40px;\n    margin-right: ", ";\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  padding: 0 ", ";\n  max-height: 0;\n  overflow-y: hidden;\n  animation: slide-down ", "ms ease-out ", "ms forwards;\n\n  @keyframes slide-down {\n    0% {\n      max-height: 0;\n    }\n    100% {\n      max-height: 300px;\n      padding-top: ", ";\n      padding-bottom: ", ";\n    }\n  }\n\n  .kirk-pushInfo-headline {\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    margin: 0 0 ", ";\n  }\n\n  .kirk-pushInfo-headline--standalone {\n    margin: 0;\n  }\n\n  .kirk-pushInfo-content {\n    margin: 0;\n  }\n\n  .kirk-pushInfo-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    min-width: 40px;\n    height: 40px;\n    margin-right: ", ";\n    background-color: ", ";\n  }\n"])), branding_1.color.midnightGreen, branding_1.color.white, branding_1.radius.l, branding_1.font.base.size, branding_1.font.base.lineHeight, branding_1.fontWeight.regular, branding_1.space.l, exports.animationDuration, exports.animationDelay, branding_1.space.l, branding_1.space.l, branding_1.font.m.size, branding_1.font.m.lineHeight, branding_1.fontWeight.medium, branding_1.space.m, branding_1.space.l, branding_1.color.white);
var templateObject_1, templateObject_2;
