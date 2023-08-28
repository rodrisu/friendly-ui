"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledStopsCount = exports.StyledWrapper = exports.StyledHiddenStops = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var body_1 = require("../typography/body");
var Itinerary_style_1 = require("./Itinerary.style");
exports.StyledHiddenStops = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: ", "px;\n\n  ul {\n    overflow: hidden;\n    // Each stop has the same height. We need to compute the final height to have a proper animation\n    height: ", ";\n    transition: height ", " ease-in-out;\n  }\n\n  > div {\n    display: ", ";\n  }\n"], ["\n  min-height: ", "px;\n\n  ul {\n    overflow: hidden;\n    // Each stop has the same height. We need to compute the final height to have a proper animation\n    height: ", ";\n    transition: height ", " ease-in-out;\n  }\n\n  > div {\n    display: ", ";\n  }\n"])), Itinerary_style_1.ITINERARY_ITEM_BASE_HEIGHT, function (props) {
    return props['aria-expanded'] ? "".concat(props.stops * Itinerary_style_1.ITINERARY_ITEM_BASE_HEIGHT, "px") : '0';
}, branding_1.transition.duration.base, function (props) { return (props['aria-expanded'] ? 'none' : 'flex'); });
exports.StyledWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.StyledStopsCount = (0, styled_components_1.default)(body_1.TextBody)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: transparent;\n  padding: ", " 0;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  background: transparent;\n  padding: ", " 0;\n  color: ", ";\n  cursor: pointer;\n"])), branding_1.space.m, branding_1.color.blue);
var templateObject_1, templateObject_2, templateObject_3;
