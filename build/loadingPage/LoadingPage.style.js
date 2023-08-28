"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLoadingPage = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledLoadingPage = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    {\n        position: absolute;\n        top:0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex\n        align-items: center;\n        justify-content: center;\n        background-color: ", "\n    }\n\n    .content-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .content-container .logo {\n        border-radius: 100%;\n        width: 48px;\n        height: 48px;\n    }\n\n    .content-container .logo svg {\n        margin: 8px 9px;\n        width: 30px;\n        height: 30px;\n    }\n\n"], ["\n    {\n        position: absolute;\n        top:0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: flex\n        align-items: center;\n        justify-content: center;\n        background-color: ", "\n    }\n\n    .content-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .content-container .logo {\n        border-radius: 100%;\n        width: 48px;\n        height: 48px;\n    }\n\n    .content-container .logo svg {\n        margin: 8px 9px;\n        width: 30px;\n        height: 30px;\n    }\n\n"])), branding_1.color.white);
var templateObject_1;
