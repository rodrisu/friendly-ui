"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessModalElements = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var modal_1 = require("../modal");
var theVoice_1 = require("../theVoice");
var StyledSuccessModal = (0, styled_components_1.default)(modal_1.Modal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0;\n  text-align: center;\n  background-color: ", ";\n\n  .kirk-modal-dialog {\n    display: flex;\n    justify-content: center;\n    margin: 0 auto;\n    width: 100%;\n    padding-top: 0;\n    padding-bottom: 0;\n    border-radius: 0;\n    background-color: ", ";\n    min-height: 100%;\n  }\n\n  .kirk-modal-body {\n    display: flex;\n    flex-direction: column;\n\n    @media (", ") {\n      flex-direction: row;\n      align-items: center;\n      flex-wrap: wrap;\n    }\n  }\n"], ["\n  padding: 0;\n  text-align: center;\n  background-color: ", ";\n\n  .kirk-modal-dialog {\n    display: flex;\n    justify-content: center;\n    margin: 0 auto;\n    width: 100%;\n    padding-top: 0;\n    padding-bottom: 0;\n    border-radius: 0;\n    background-color: ", ";\n    min-height: 100%;\n  }\n\n  .kirk-modal-body {\n    display: flex;\n    flex-direction: column;\n\n    @media (", ") {\n      flex-direction: row;\n      align-items: center;\n      flex-wrap: wrap;\n    }\n  }\n"
    /* LAYOUT: Media */
])), branding_1.color.green, branding_1.color.green, branding_1.responsiveBreakpoints.isMediaLarge);
/* LAYOUT: Media */
var Media = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  @media (", ") {\n    max-width: ", ";\n    margin-left: auto;\n    margin-right: auto;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n\n  @media (", ") {\n    max-width: ", ";\n    margin-left: auto;\n    margin-right: auto;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.componentSizes.largeSectionWidth);
var Figure = styled_components_1.default.figure(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  margin-top: calc(2 * ", ");\n  justify-content: center;\n  align-items: center;\n  height: 33.33%;\n  max-height: 33.33%;\n\n  img {\n    height: 100%;\n    max-width: 305px; /* Magic Numbers from spec */\n    max-height: 240px; /* Magic Numbers from spec */\n  }\n\n  @media (", ") {\n    margin: 0;\n    width: 33.33%;\n    min-width: 33.33vh;\n\n    img {\n      width: 100%;\n    }\n  }\n"], ["\n  display: flex;\n  margin-top: calc(2 * ", ");\n  justify-content: center;\n  align-items: center;\n  height: 33.33%;\n  max-height: 33.33%;\n\n  img {\n    height: 100%;\n    max-width: 305px; /* Magic Numbers from spec */\n    max-height: 240px; /* Magic Numbers from spec */\n  }\n\n  @media (", ") {\n    margin: 0;\n    width: 33.33%;\n    min-width: 33.33vh;\n\n    img {\n      width: 100%;\n    }\n  }\n"])), branding_1.space.xxl, branding_1.responsiveBreakpoints.isMediaLarge);
var Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  @media (", ") {\n    height: auto;\n    /* gutter */\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  @media (", ") {\n    height: auto;\n    /* gutter */\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"
    /* SuccessModal Spacements */
])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.l, branding_1.componentSizes.smallSectionWidth);
/* SuccessModal Spacements */
var SuccessTitle = (0, styled_components_1.default)(theVoice_1.TheVoice).attrs({ isInverted: true })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  white-space: pre-line;\n"], ["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  white-space: pre-line;\n"])));
var SuccessAction = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-bottom: ", ";\n\n  @media (", ") {\n    padding-bottom: 0;\n  }\n"], ["\n  padding-bottom: ", ";\n\n  @media (", ") {\n    padding-bottom: 0;\n  }\n"])), branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge);
var SuccessButton = (0, styled_components_1.default)(button_1.Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  justify-content: center;\n  margin: ", ";\n\n  /* to increase specificity since button is declared with high specificity */\n  & {\n    min-width: 8rem;\n  }\n"], ["\n  justify-content: center;\n  margin: ", ";\n\n  /* to increase specificity since button is declared with high specificity */\n  & {\n    min-width: 8rem;\n  }\n"])), branding_1.space.xl);
exports.SuccessModalElements = {
    StyledSuccessModal: StyledSuccessModal,
    Media: Media,
    Figure: Figure,
    Content: Content,
    SuccessTitle: SuccessTitle,
    SuccessAction: SuccessAction,
    SuccessButton: SuccessButton,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
