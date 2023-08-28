"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMainContent = exports.BottomContent = exports.Content = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var Content_1 = require("./Content");
exports.Content = styled_components_1.default.div.attrs(function () { return ({
    role: 'presentation',
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.BottomContent = styled_components_1.default.div.attrs(function () { return ({
    role: 'presentation',
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.StyledMainContent = (0, styled_components_1.default)(Content_1.MainContent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - ", ");\n  min-height: stretch;\n  justify-content: space-between;\n\n  @media (", ") {\n    justify-content: flex-start;\n  }\n\n  & > *:not(", ", ", ") {\n    flex-grow: 1;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - ", ");\n  min-height: stretch;\n  justify-content: space-between;\n\n  @media (", ") {\n    justify-content: flex-start;\n  }\n\n  & > *:not(", ", ", ") {\n    flex-grow: 1;\n  }\n"])), function (props) { return props.topBarHeight; }, branding_1.responsiveBreakpoints.isMediaLarge, exports.Content, exports.BottomContent);
var templateObject_1, templateObject_2, templateObject_3;
