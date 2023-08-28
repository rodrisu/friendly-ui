"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBullet = exports.StyledLine = exports.StyledLineWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var Itinerary_style_1 = require("../Itinerary.style");
var Lines_1 = require("../Lines");
var LINE_WIDTH = '4px';
var LINE_HEIGHT = '12px'; // First line is 12px long, the second is flex.
exports.StyledLineWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: ", "px;\n  margin: 0 ", ";\n  width: ", ";\n  flex-shrink: 0;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: ", "px;\n  margin: 0 ", ";\n  width: ", ";\n  flex-shrink: 0;\n"
    // Using background-image to display the dashed line for connection
])), Itinerary_style_1.ITINERARY_ITEM_BASE_HEIGHT, branding_1.space.m, branding_1.space.m);
// Using background-image to display the dashed line for connection
var base64EncodedDash = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMDAiPjxsaW5lIHgxPSIyIiB4Mj0iMiIgeTE9IjUiIHkyPSIxMDAlIiBzdHJva2U9IiM3MDhDOTEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIuMDAxLCAxMCIvPjwvc3ZnPg==';
var lineToBackground = (_a = {},
    _a[Lines_1.Lines.NONE] = 'transparent',
    _a[Lines_1.Lines.ACTIVE] = branding_1.color.midnightGreen,
    _a[Lines_1.Lines.INACTIVE] = branding_1.color.gray,
    _a[Lines_1.Lines.CONNECTION] = "repeat-y url(\"data:image/svg+xml;base64,".concat(base64EncodedDash, "\")"),
    _a[Lines_1.Lines.HIDDEN_STOPS] = branding_1.color.midnightGreen,
    _a);
exports.StyledLine = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: calc(", " + 1px); // Adding 1 magic px to have the line go under the bullet\n  background: ", ";\n\n  &:last-child {\n    flex: 1;\n  }\n\n  // For hidden stops, render rounded bars with some margins.\n  ", "\n"], ["\n  width: ", ";\n  height: calc(", " + 1px); // Adding 1 magic px to have the line go under the bullet\n  background: ", ";\n\n  &:last-child {\n    flex: 1;\n  }\n\n  // For hidden stops, render rounded bars with some margins.\n  ", "\n"])), LINE_WIDTH, LINE_HEIGHT, function (_a) {
    var line = _a.line;
    return lineToBackground[line];
}, function (_a) {
    var line = _a.line;
    return line === Lines_1.Lines.HIDDEN_STOPS &&
        "\n    &:first-child {\n      height: calc(".concat(LINE_HEIGHT, " - ").concat(branding_1.space.s, "); // 4px margin before the icon\n      border-radius: 0 0 ").concat(branding_1.radius.s, " ").concat(branding_1.radius.s, ";\n    }\n\n    &:last-child {\n      margin-top: calc(").concat(branding_1.componentSizes.bulletSize, " + ").concat(branding_1.space.s, " + ").concat(branding_1.space.s, "); // 10px bullet height + 4px margins each side\n      border-radius: ").concat(branding_1.radius.s, " ").concat(branding_1.radius.s, " 0 0;\n    }\n  ");
});
exports.StyledBullet = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  // Use absolute position to make sure the bullet goes over the line nicely.\n  position: absolute;\n  // Magic numbers to align the icon/bullet with the text\n  top: ", ";\n  // IE 11 needs a left position. Let's center the bullet with CSS then\n  left: 50%;\n  transform: translateX(-50%);\n"], ["\n  // Use absolute position to make sure the bullet goes over the line nicely.\n  position: absolute;\n  // Magic numbers to align the icon/bullet with the text\n  top: ", ";\n  // IE 11 needs a left position. Let's center the bullet with CSS then\n  left: 50%;\n  transform: translateX(-50%);\n"])), function (_a) {
    var isIcon = _a.isIcon;
    return (isIcon ? '7px' : '12px');
});
var templateObject_1, templateObject_2, templateObject_3;
