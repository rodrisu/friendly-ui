"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSnackbar = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledSnackbar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000; /* above the modal */\n\n  & .kirk-snackbar {\n    display: flex;\n    flex-direction: row;\n    align-self: center; /* fix centering on IE11 */\n    width: 100%;\n    max-width: 614px;\n    overflow: hidden;\n    background-color: ", ";\n    padding: ", " ", ";\n  }\n\n  & .kirk-snackbar .kirk-snackbar-content {\n    flex: 1;\n    margin: 0;\n    color: ", ";\n  }\n\n  & .kirk-snackbar .kirk-snackbar-cross {\n    padding: 0 0 0 ", ";\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000; /* above the modal */\n\n  & .kirk-snackbar {\n    display: flex;\n    flex-direction: row;\n    align-self: center; /* fix centering on IE11 */\n    width: 100%;\n    max-width: 614px;\n    overflow: hidden;\n    background-color: ", ";\n    padding: ", " ", ";\n  }\n\n  & .kirk-snackbar .kirk-snackbar-content {\n    flex: 1;\n    margin: 0;\n    color: ", ";\n  }\n\n  & .kirk-snackbar .kirk-snackbar-cross {\n    padding: 0 0 0 ", ";\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])), branding_1.color.red, branding_1.space.l, branding_1.space.xl, branding_1.color.white, branding_1.space.m);
var templateObject_1;
