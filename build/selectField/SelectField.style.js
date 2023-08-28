"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSelectField = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.StyledSelectField = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  ", ";\n  padding: ", " 0;\n\n  .kirk-selectField-background {\n    position: relative;\n    color: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    border: solid 1px ", ";\n    box-shadow: none;\n    padding: 0 0 0 ", ";\n  }\n\n  & select {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: ", ";\n    margin: 0;\n    padding: 0 calc(", " + ", ") 0 0;\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n    box-shadow: none;\n    background: transparent;\n    appearance: none;\n    outline: 0;\n    box-shadow: none;\n    border: none;\n    border-radius: ", ";\n    cursor: pointer;\n    z-index: 1;\n  }\n\n  /* Remove native select arrow on Internet Explorer 10 and 11  */\n  & select::-ms-expand {\n    display: none;\n  }\n\n  & select:focus {\n    outline: none;\n  }\n\n  & .kirk-icon {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    right: ", ";\n    background: ", ";\n    z-index: 0;\n  }\n\n  .kirk-selectField--hasFocus {\n    border: ", " solid ", ";\n  }\n\n  .kirk-selectField--hasFocus select {\n    height: calc(", " - ", " - ", ");\n  }\n"], ["\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  ", ";\n  padding: ", " 0;\n\n  .kirk-selectField-background {\n    position: relative;\n    color: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    border: solid 1px ", ";\n    box-shadow: none;\n    padding: 0 0 0 ", ";\n  }\n\n  & select {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: ", ";\n    margin: 0;\n    padding: 0 calc(", " + ", ") 0 0;\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n    box-shadow: none;\n    background: transparent;\n    appearance: none;\n    outline: 0;\n    box-shadow: none;\n    border: none;\n    border-radius: ", ";\n    cursor: pointer;\n    z-index: 1;\n  }\n\n  /* Remove native select arrow on Internet Explorer 10 and 11  */\n  & select::-ms-expand {\n    display: none;\n  }\n\n  & select:focus {\n    outline: none;\n  }\n\n  & .kirk-icon {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    right: ", ";\n    background: ", ";\n    z-index: 0;\n  }\n\n  .kirk-selectField--hasFocus {\n    border: ", " solid ", ";\n  }\n\n  .kirk-selectField--hasFocus select {\n    height: calc(", " - ", " - ", ");\n  }\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.space.m, branding_1.color.midnightGreen, branding_1.color.lightGray, branding_1.radius.l, branding_1.color.lightGray, branding_1.space.l, branding_1.selectHeight, branding_1.space.m, branding_1.space.xl, branding_1.font.base.size, branding_1.font.base.lineHeight, branding_1.color.midnightGreen, branding_1.radius.l, branding_1.space.m, branding_1.color.lightGray, branding_1.inputBorderSize.focus, branding_1.color.blue, branding_1.selectHeight, branding_1.inputBorderSize.default, branding_1.inputBorderSize.focus);
var templateObject_1;