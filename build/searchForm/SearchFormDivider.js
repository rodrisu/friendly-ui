"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveDivider = exports.VerticalDivider = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var SearchForm_style_1 = require("./SearchForm.style");
exports.VerticalDivider = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  border: none;\n  width: 1px;\n  height: ", ";\n  background-color: ", ";\n"], ["\n  margin: 0;\n  border: none;\n  width: 1px;\n  height: ", ";\n  background-color: ", ";\n"
    // Horizontal on small screens, vertical on large ones.
])), SearchForm_style_1.buttonHeight, branding_1.color.lightGray);
// Horizontal on small screens, vertical on large ones.
exports.ResponsiveDivider = styled_components_1.default.hr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", " 0;\n  border: none;\n  height: 1px;\n  background-color: ", ";\n\n  ", "\n"], ["\n  margin: ", " 0;\n  border: none;\n  height: 1px;\n  background-color: ", ";\n\n  ", "\n"])), branding_1.space.m, branding_1.color.lightGray, function (props) {
    return props.$isLargeDisplay &&
        "\n    width: 1px;\n    height: ".concat(SearchForm_style_1.buttonHeight, ";\n    margin: 0;\n  ");
});
var templateObject_1, templateObject_2;
