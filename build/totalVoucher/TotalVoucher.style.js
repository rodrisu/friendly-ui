"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTotalVoucher = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var card_1 = require("../_internals/card");
var branding_1 = require("../_utils/branding");
var itemAction_1 = require("../itemAction");
var display1_1 = require("../typography/display1");
var subHeaderStrong_1 = require("../typography/subHeaderStrong");
var titleStrong_1 = require("../typography/titleStrong");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding: ", " 0;\n\n  svg {\n    max-width: 50%;\n    transform: translateX(-50%);\n    position: relative;\n    left: 50%;\n  }\n\n  @media (", ") {\n    padding: ", " ", ";\n\n    svg {\n      max-width: none;\n    }\n  }\n"], ["\n  background: ", ";\n  padding: ", " 0;\n\n  svg {\n    max-width: 50%;\n    transform: translateX(-50%);\n    position: relative;\n    left: 50%;\n  }\n\n  @media (", ") {\n    padding: ", " ", ";\n\n    svg {\n      max-width: none;\n    }\n  }\n"])), branding_1.color.lightBlue, branding_1.space.xxl, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl, branding_1.space.xl);
var StyledCard = (0, styled_components_1.default)(card_1.Card)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", " 0;\n  position: relative;\n  top: -4px;\n"], ["\n  padding: ", " 0;\n  position: relative;\n  top: -4px;\n"])), branding_1.space.xl);
var StyledTitle = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 ", " ", ";\n"], ["\n  padding: 0 ", " ", ";\n"])), branding_1.space.xl, branding_1.space.xxl);
var StyledSubTitle = (0, styled_components_1.default)(subHeaderStrong_1.TextSubHeaderStrong)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 0 ", " ", ";\n"], ["\n  padding: 0 ", " ", ";\n"])), branding_1.space.xl, branding_1.space.l);
var StyledTerms = (0, styled_components_1.default)(itemAction_1.ItemAction)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var StyledStepsTitle = (0, styled_components_1.default)(titleStrong_1.TextTitleStrong)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", " ", ";\n\n  img {\n    vertical-align: middle;\n    max-height: ", ";\n    margin-left: ", ";\n  }\n"], ["\n  padding: ", " ", ";\n\n  img {\n    vertical-align: middle;\n    max-height: ", ";\n    margin-left: ", ";\n  }\n"])), branding_1.space.l, branding_1.space.xl, branding_1.font.xl.size, branding_1.space.s);
var StyledSteps = styled_components_1.default.ul(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  align-items: flex-start;\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledButton = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  text-align: center;\n  padding-top: ", ";\n"], ["\n  text-align: center;\n  padding-top: ", ";\n"])), branding_1.space.xl);
exports.StyledTotalVoucher = {
    Container: StyledContainer,
    Card: StyledCard,
    Title: StyledTitle,
    SubTitle: StyledSubTitle,
    Terms: StyledTerms,
    StepsTitle: StyledStepsTitle,
    Steps: StyledSteps,
    Button: StyledButton,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
