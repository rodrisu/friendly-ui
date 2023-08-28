"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledColumnedContentSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var button_1 = require("../../../button");
var column_1 = require("../../../layout/column");
var body_1 = require("../../../typography/body");
var display1_1 = require("../../../typography/display1");
var title_1 = require("../../../typography/title");
var baseSection_1 = require("../baseSection");
var StyledTextTitle = (0, styled_components_1.default)(title_1.TextTitle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  margin: 0;\n  font-weight: ", ";\n"], ["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  margin: 0;\n  font-weight: ", ";\n"])), branding_1.space.m, branding_1.space.s, branding_1.fontWeight.medium);
var StyledTextBody = (0, styled_components_1.default)(body_1.TextBody)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n"], ["\n  margin: 0;\n"])));
var StyledTextDisplay1 = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  padding: ", " 0;\n  margin: 0;\n\n  @media (", ") {\n    text-align: center;\n  }\n"], ["\n  flex: 1;\n  padding: ", " 0;\n  margin: 0;\n\n  @media (", ") {\n    text-align: center;\n  }\n"])), branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledColumn = (0, styled_components_1.default)(column_1.Column)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  @media (", ") {\n    text-align: center;\n\n    &:not(:first-child):not(:last-child) {\n      margin-top: ", ";\n      margin-bottom: ", ";\n    }\n  }\n\n  @media (", ") {\n    &:not(:last-child) {\n      margin-right: ", ";\n    }\n  }\n"], ["\n  @media (", ") {\n    text-align: center;\n\n    &:not(:first-child):not(:last-child) {\n      margin-top: ", ";\n      margin-bottom: ", ";\n    }\n  }\n\n  @media (", ") {\n    &:not(:last-child) {\n      margin-right: ", ";\n    }\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xxl);
var StyledHeader = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: last baseline;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: last baseline;\n"])));
var StyledTopLink = (0, styled_components_1.default)(button_1.Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  @media (", ") {\n    && {\n      display: none;\n    }\n  }\n"], ["\n  @media (", ") {\n    && {\n      display: none;\n    }\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledFooterLink = (0, styled_components_1.default)(button_1.Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  && {\n    font-size: ", ";\n    line-height: ", ";\n    padding-top: ", ";\n  }\n\n  @media (", ") {\n    && {\n      text-align: center;\n    }\n  }\n"], ["\n  && {\n    font-size: ", ";\n    line-height: ", ";\n    padding-top: ", ";\n  }\n\n  @media (", ") {\n    && {\n      text-align: center;\n    }\n  }\n"])), branding_1.font.m.size, branding_1.font.m.lineHeight, branding_1.space.m, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledMediaElement = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  text-align: left;\n  margin-bottom: ", ";\n\n  @media (", ") {\n    text-align: center;\n  }\n"], ["\n  text-align: left;\n  margin-bottom: ", ";\n\n  @media (", ") {\n    text-align: center;\n  }\n"])), branding_1.space.m, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledMediaCover = styled_components_1.default.a(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  & img {\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n    border-radius: ", ";\n  }\n"], ["\n  & img {\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n    border-radius: ", ";\n  }\n"])), branding_1.radius.s);
var StyledMediaFit = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  text-align: center;\n  margin-bottom: ", ";\n\n  & img {\n    width: 60%;\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  text-align: center;\n  margin-bottom: ", ";\n\n  & img {\n    width: 60%;\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"])), branding_1.space.m, branding_1.radius.s, branding_1.space.m);
var StyledWrapper = styled_components_1.default.article(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", " 0 ", ";\n"], ["\n  background-color: ", ";\n  padding: ", " 0 ", ";\n"])), function (props) { var _a; return (_a = props.backgroundColor) !== null && _a !== void 0 ? _a : branding_1.color.white; }, branding_1.space.xl, branding_1.space.xxl);
var StyledBaseSection = (0, styled_components_1.default)(baseSection_1.BaseSection)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.StyledColumnedContentSection = {
    Wrapper: StyledWrapper,
    Section: StyledBaseSection,
    Header: StyledHeader,
    Title: StyledTextDisplay1,
    TopLink: StyledTopLink,
    Column: StyledColumn,
    ColumnTitle: StyledTextTitle,
    ColumnContent: StyledTextBody,
    ColumnFooter: StyledFooterLink,
    MediaElement: StyledMediaElement,
    MediaCover: StyledMediaCover,
    MediaFit: StyledMediaFit,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
