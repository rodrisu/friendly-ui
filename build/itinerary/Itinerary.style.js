"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledItinerary = exports.ITINERARY_ITEM_BASE_HEIGHT = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.ITINERARY_ITEM_BASE_HEIGHT = 32;
var ITINERARY_TIME_WIDTH = '48px';
exports.StyledItinerary = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // On li sub-element to have a proper hover on clickable elements\n  > li > * {\n    ", ";\n  }\n\n  // Used to display the left column. Elements without time also have this empty tag to help with the layout\n  time {\n    width: ", ";\n    padding-top: ", ";\n    display: ", ";\n    flex-shrink: 0;\n  }\n\n  // Remove line/icons left margin if small display\n  ", ";\n"], ["\n  // On li sub-element to have a proper hover on clickable elements\n  > li > * {\n    ", ";\n  }\n\n  // Used to display the left column. Elements without time also have this empty tag to help with the layout\n  time {\n    width: ", ";\n    padding-top: ", ";\n    display: ", ";\n    flex-shrink: 0;\n  }\n\n  // Remove line/icons left margin if small display\n  ", ";\n"])), layoutNormalizer_1.normalizeHorizontally, ITINERARY_TIME_WIDTH, branding_1.space.m, function (_a) {
    var small = _a.small;
    return (small ? 'none' : 'initial');
}, function (_a) {
    var small = _a.small;
    return small
        ? "\n    time + * {\n      margin-left: 0;\n    }\n  "
        : '';
});
var templateObject_1;
