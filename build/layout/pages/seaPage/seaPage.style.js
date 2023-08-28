"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPageElements = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var display1_1 = require("../../../typography/display1");
// Common content width with used on the app: `componentSizes.searchOverlayWidth`
var CONTENT_WIDTH = '375px';
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-areas:\n    'media'\n    'body';\n  grid-template-rows: 33vh auto;\n  background-color: ", ";\n\n  @media (", ") {\n    // @note: Avoid scroll by taking into account Header (topBar)\n    height: calc(100vh - ", ");\n    grid-template-areas: 'body media';\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto;\n  }\n"], ["\n  display: grid;\n  grid-template-areas:\n    'media'\n    'body';\n  grid-template-rows: 33vh auto;\n  background-color: ", ";\n\n  @media (", ") {\n    // @note: Avoid scroll by taking into account Header (topBar)\n    height: calc(100vh - ", ");\n    grid-template-areas: 'body media';\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto;\n  }\n"])), branding_1.color.white, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.componentSizes.headerHeight.large);
var Body = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-area: body;\n  align-self: center;\n  justify-self: center;\n  max-width: ", ";\n  margin-top: ", ";\n\n  @media (", ") {\n    grid-row-start: 1;\n    margin-top: 0;\n  }\n"], ["\n  grid-area: body;\n  align-self: center;\n  justify-self: center;\n  max-width: ", ";\n  margin-top: ", ";\n\n  @media (", ") {\n    grid-row-start: 1;\n    margin-top: 0;\n  }\n"])), CONTENT_WIDTH, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge);
var Media = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-area: media;\n  grid-column-start: 1;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n\n  @media (", ") {\n    grid-row-start: 1;\n    grid-column-start: 2;\n    background-image: ", ";\n  }\n"], ["\n  grid-area: media;\n  grid-column-start: 1;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n\n  @media (", ") {\n    grid-row-start: 1;\n    grid-column-start: 2;\n    background-image: ", ";\n  }\n"])), function (props) { return "url(".concat(props.small, ")"); }, branding_1.responsiveBreakpoints.isMediaLarge, function (props) { return "url(".concat(props.large, ")"); });
var Heading = (0, styled_components_1.default)(display1_1.TextDisplay1).attrs({ isInverted: true })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", " ", ";\n  text-align: center;\n\n  @media (", ") {\n    padding: ", " ", ";\n\n    // Display 2\n    font-size: ", ";\n    line-height: ", ";\n  }\n"], ["\n  padding: ", " ", ";\n  text-align: center;\n\n  @media (", ") {\n    padding: ", " ", ";\n\n    // Display 2\n    font-size: ", ";\n    line-height: ", ";\n  }\n"])), branding_1.space.m, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xxl, branding_1.space.xl, branding_1.font.xxl.size, branding_1.font.xxl.lineHeight);
exports.SeaPageElements = {
    Wrapper: Wrapper,
    Body: Body,
    Media: Media,
    Heading: Heading,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
