"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledItineraryItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var Itinerary_style_1 = require("../Itinerary.style");
exports.StyledItineraryItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: ", "px;\n\n  > * {\n    display: flex;\n  }\n\n  ", ";\n"], ["\n  min-height: ", "px;\n\n  > * {\n    display: flex;\n  }\n\n  ", ";\n"])), Itinerary_style_1.ITINERARY_ITEM_BASE_HEIGHT, function (_a) {
    var hasLink = _a.hasLink;
    return hasLink &&
        "\n    > * {\n      -webkit-tap-highlight-color: ".concat(branding_1.color.tapHighlight, ";\n\n      &:hover {\n        background-color: ").concat(branding_1.color.tapHighlight, ";\n      }\n    }\n  ");
});
var templateObject_1;
