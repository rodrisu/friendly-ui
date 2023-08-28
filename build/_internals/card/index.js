"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var Card_1 = require("./Card");
var StyledCard = (0, styled_components_1.default)(Card_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    border-radius: ", ";\n    box-shadow: ", ";\n    list-style-type: none;\n    transition: box-shadow ", " ", ";\n    background-color: ", ";\n    flex: 1;\n  }\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"], ["\n  & {\n    border-radius: ", ";\n    box-shadow: ", ";\n    list-style-type: none;\n    transition: box-shadow ", " ", ";\n    background-color: ", ";\n    flex: 1;\n  }\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"])), branding_1.radius.l, branding_1.shadow.card, branding_1.transition.duration.base, branding_1.transition.easing.default, branding_1.color.white, branding_1.shadow.cardHover);
exports.Card = StyledCard;
var templateObject_1;
