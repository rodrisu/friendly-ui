"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var columns_1 = require("./columns");
var StyledColumns = (0, styled_components_1.default)(columns_1.Columns)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    display: flex;\n    flex-direction: row;\n\n    /** Reset styles from <ul> */\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  @media (", ") {\n    & {\n      flex-direction: column;\n    }\n  }\n"], ["\n  & {\n    display: flex;\n    flex-direction: row;\n\n    /** Reset styles from <ul> */\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  @media (", ") {\n    & {\n      flex-direction: column;\n    }\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
exports.Columns = StyledColumns;
var templateObject_1;
