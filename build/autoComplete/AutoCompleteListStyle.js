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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteList = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var AutoCompleteList_1 = require("./AutoCompleteList");
var StyledAutoCompleteList = (0, styled_components_1.default)(AutoCompleteList_1.AutoCompleteList)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    margin-top: ", ";\n    flex: 1;\n  }\n\n  & .kirk-item-choice {\n    padding-top: ", ";\n    padding-bottom: ", ";\n  }\n\n  & .kirk-autoComplete-primaryText {\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n  }\n\n  & .kirk-autoComplete-secondaryText {\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    margin-top: ", ";\n  }\n\n  & .kirk-item-choice:hover,\n  & .kirk-item-choice[aria-selected='true'],\n  & .kirk-item-choice.highlight {\n    background-color: ", ";\n  }\n"], ["\n  & {\n    margin-top: ", ";\n    flex: 1;\n  }\n\n  & .kirk-item-choice {\n    padding-top: ", ";\n    padding-bottom: ", ";\n  }\n\n  & .kirk-autoComplete-primaryText {\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n  }\n\n  & .kirk-autoComplete-secondaryText {\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    margin-top: ", ";\n  }\n\n  & .kirk-item-choice:hover,\n  & .kirk-item-choice[aria-selected='true'],\n  & .kirk-item-choice.highlight {\n    background-color: ", ";\n  }\n"])), branding_1.space.m, branding_1.space.m, branding_1.space.m, branding_1.color.midnightGreen, branding_1.font.m.size, branding_1.font.m.lineHeight, branding_1.color.lightMidnightGreen, branding_1.font.base.size, branding_1.font.base.lineHeight, branding_1.space.s, branding_1.color.lightGray);
exports.AutoCompleteList = StyledAutoCompleteList;
__exportStar(require("./AutoCompleteList"), exports);
var templateObject_1;
