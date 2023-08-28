"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledProfile = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("../_internals/item");
exports.StyledProfile = (0, styled_components_1.default)(item_1.Item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.kirk-profile-size-medium .kirk-item-leftText {\n    align-self: flex-end;\n  }\n"], ["\n  &.kirk-profile-size-medium .kirk-item-leftText {\n    align-self: flex-end;\n  }\n"])));
var templateObject_1;
