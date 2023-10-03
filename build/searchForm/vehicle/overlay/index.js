"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteOverlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var baseStyles_1 = require("../../../searchForm/baseStyles");
var VehicleOverlay_1 = require("./VehicleOverlay");
var StyledAutoComplete = (0, styled_components_1.default)(VehicleOverlay_1.AutoCompleteOverlay)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", "\n\n    ", "\n\n    .kirk-textField-wrapper {\n      padding-top: ", ";\n\n      .kirk-autoComplete-icon {\n        padding: 0;\n        height: auto;\n        display: flex;\n        margin-right: ", ";\n        justify-content: center;\n        align-items: center;\n      }\n    }\n  }\n"], ["\n  & {\n    ", "\n\n    ", "\n\n    .kirk-textField-wrapper {\n      padding-top: ", ";\n\n      .kirk-autoComplete-icon {\n        padding: 0;\n        height: auto;\n        display: flex;\n        margin-right: ", ";\n        justify-content: center;\n        align-items: center;\n      }\n    }\n  }\n"])), baseStyles_1.overlayBaseStyle, baseStyles_1.autoCompleteBaseStyle, branding_1.space.s, branding_1.space.m);
exports.AutoCompleteOverlay = StyledAutoComplete;
var templateObject_1;
