"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerElements = exports.Body = exports.Media = exports.Content = exports.Frame = exports.StyledBanner = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var display1_1 = require("../typography/display1");
var title_1 = require("../typography/title");
var phone_frame_svg_1 = __importDefault(require("./phone-frame.svg"));
exports.StyledBanner = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", " ", " 0 ", ";\n\n  overflow: hidden;\n\n  @media (", ") {\n    min-height: 19.625rem; //314px magic number\n  }\n"], ["\n  background-color: ", ";\n  padding: ", " ", " 0 ", ";\n\n  overflow: hidden;\n\n  @media (", ") {\n    min-height: 19.625rem; //314px magic number\n  }\n"])), branding_1.color.boostBlue, branding_1.space.xxl, branding_1.space.xl, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge);
var Heading = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), branding_1.space.xl);
var Intro = (0, styled_components_1.default)(title_1.TextTitle)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), branding_1.space.xl);
var Actions = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: ", " 0;\n  text-align: center;\n\n  @media (", ") {\n    text-align: left;\n  }\n\n  > button:first-child {\n    margin-right: ", ";\n  }\n"], ["\n  margin: ", " 0;\n  text-align: center;\n\n  @media (", ") {\n    text-align: left;\n  }\n\n  > button:first-child {\n    margin-right: ", ";\n  }\n"])), branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.l);
var phoneTop = '64px';
exports.Frame = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: ", " ", " 0 ", ";\n  background: no-repeat top center url(", ");\n  background-size: cover;\n  width: 225px;\n  height: 268px;\n  margin: auto;\n"], ["\n  padding: ", " ", " 0 ", ";\n  background: no-repeat top center url(", ");\n  background-size: cover;\n  width: 225px;\n  height: 268px;\n  margin: auto;\n"
    /** LAYOUT */
])), phoneTop, branding_1.space.xl, branding_1.space.xl, phone_frame_svg_1.default);
/** LAYOUT */
exports.Content = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n\n  @media (", ") {\n    display: flex;\n    justify-content: space-between;\n  }\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n\n  @media (", ") {\n    display: flex;\n    justify-content: space-between;\n  }\n"])), branding_1.componentSizes.largeSectionWidth, branding_1.responsiveBreakpoints.isMediaLarge);
exports.Media = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  @media (", ") {\n    width: 50%;\n    align-self: flex-end;\n  }\n"], ["\n  @media (", ") {\n    width: 50%;\n    align-self: flex-end;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge);
exports.Body = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  @media (", ") {\n    width: 50%;\n  }\n"], ["\n  @media (", ") {\n    width: 50%;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge);
exports.BannerElements = {
    Content: exports.Content,
    Media: exports.Media,
    Body: exports.Body,
    Heading: Heading,
    Intro: Intro,
    Frame: exports.Frame,
    Actions: Actions,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
