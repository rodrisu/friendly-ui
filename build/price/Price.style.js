"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAddon = exports.StyledPrice = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
var constants_1 = require("./constants");
// These components have a 12px vertical padding. We probably took a shortcut when creating our
// sizes, as we should have handled 4px multiples (checked with @wakooka)
var betweenMandL = '12px';
exports.StyledPrice = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  display: flex;\n  position: relative;\n\n  & .kirk-price-content {\n    display: flex;\n    position: relative;\n    flex: 1;\n  }\n\n  & .kirk-price-input {\n    display: flex;\n    position: relative;\n    flex: 1;\n  }\n\n  & .kirk-price-value {\n    display: inline;\n    padding: 0 ", ";\n    margin: 0;\n    border: none;\n    color: ", ";\n    text-align: center;\n    flex-grow: 1;\n    align-self: center;\n  }\n\n  & .kirk-price-decrement,\n  & .kirk-price-increment {\n    flex-shrink: 0;\n    align-self: center;\n    border: none;\n  }\n\n  &.kirk-price-small {\n    padding: ", " 0;\n  }\n\n  &.kirk-price-large .kirk-price-value {\n    width: calc(100% - ", "px * 2);\n    flex-grow: 0;\n  }\n"], ["\n  ", ";\n  display: flex;\n  position: relative;\n\n  & .kirk-price-content {\n    display: flex;\n    position: relative;\n    flex: 1;\n  }\n\n  & .kirk-price-input {\n    display: flex;\n    position: relative;\n    flex: 1;\n  }\n\n  & .kirk-price-value {\n    display: inline;\n    padding: 0 ", ";\n    margin: 0;\n    border: none;\n    color: ", ";\n    text-align: center;\n    flex-grow: 1;\n    align-self: center;\n  }\n\n  & .kirk-price-decrement,\n  & .kirk-price-increment {\n    flex-shrink: 0;\n    align-self: center;\n    border: none;\n  }\n\n  &.kirk-price-small {\n    padding: ", " 0;\n  }\n\n  &.kirk-price-large .kirk-price-value {\n    width: calc(100% - ", "px * 2);\n    flex-grow: 0;\n  }\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.space.l, function (props) { return props.valueColor; }, betweenMandL, constants_1.PriceButtonSize[constants_1.PriceDisplay.LARGE]);
exports.StyledAddon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  // Vertical align the addon\n  display: flex;\n  align-items: center;\n\n  // Addon is expending, while price has a fixed size\n  flex: 1;\n  & + .kirk-price-content {\n    flex: 0;\n  }\n\n  // Left addon can be a normalized component (with 24px horizontal padding). Let's counter it.\n  margin-left: ", ";\n"], ["\n  // Vertical align the addon\n  display: flex;\n  align-items: center;\n\n  // Addon is expending, while price has a fixed size\n  flex: 1;\n  & + .kirk-price-content {\n    flex: 0;\n  }\n\n  // Left addon can be a normalized component (with 24px horizontal padding). Let's counter it.\n  margin-left: ", ";\n"])), function (props) { return (props.fixNormalization ? "-".concat(branding_1.space.xl) : 0); });
var templateObject_1, templateObject_2;
