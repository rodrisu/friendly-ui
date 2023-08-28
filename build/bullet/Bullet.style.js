"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBullet = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledBullet = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 50%;\n\n  &.kirk-bullet--addon {\n    border-color: ", ";\n  }\n\n  &.kirk-bullet--small {\n    width: ", ";\n    height: ", ";\n  }\n\n  &.kirk-bullet--map-active,\n  &.kirk-bullet--map-inactive,\n  &.kirk-bullet--search {\n    border-width: 3px;\n  }\n\n  &.kirk-bullet--map-active,\n  &.kirk-bullet--map-inactive {\n    width: ", ";\n    height: ", ";\n  }\n\n  &.kirk-bullet--search {\n    width: ", ";\n    height: ", ";\n  }\n\n  &.kirk-bullet--map-active {\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n\n  &.kirk-bullet--map-inactive {\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n\n  &.kirk-bullet--search {\n    border-width: 4px;\n    border-color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 50%;\n\n  &.kirk-bullet--addon {\n    border-color: ", ";\n  }\n\n  &.kirk-bullet--small {\n    width: ", ";\n    height: ", ";\n  }\n\n  &.kirk-bullet--map-active,\n  &.kirk-bullet--map-inactive,\n  &.kirk-bullet--search {\n    border-width: 3px;\n  }\n\n  &.kirk-bullet--map-active,\n  &.kirk-bullet--map-inactive {\n    width: ", ";\n    height: ", ";\n  }\n\n  &.kirk-bullet--search {\n    width: ", ";\n    height: ", ";\n  }\n\n  &.kirk-bullet--map-active {\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n\n  &.kirk-bullet--map-inactive {\n    border-color: ", ";\n    box-shadow: 0 0 0 1px ", ";\n  }\n\n  &.kirk-bullet--search {\n    border-width: 4px;\n    border-color: ", ";\n  }\n"])), branding_1.componentSizes.bulletSize, branding_1.componentSizes.bulletSize, branding_1.color.white, branding_1.color.midnightGreen, branding_1.color.gray, branding_1.componentSizes.bulletSizeSmall, branding_1.componentSizes.bulletSizeSmall, branding_1.componentSizes.bulletSizeMap, branding_1.componentSizes.bulletSizeMap, branding_1.componentSizes.bulletSizeSearch, branding_1.componentSizes.bulletSizeSearch, branding_1.color.midnightGreenDetail, branding_1.color.midnightGreen, branding_1.color.gray, branding_1.color.lightMidnightGreen, branding_1.color.lightMidnightGreen);
var templateObject_1;
