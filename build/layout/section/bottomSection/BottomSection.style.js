"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBottomSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* stylelint-disable declaration-block-no-duplicate-properties */\n  position: -webkit-sticky;\n  position: sticky;\n  /* stylelint-enable */\n\n  flex: 1 100%;\n  bottom: 0;\n  background: ", ";\n  z-index: 2;\n  border-top: 1px solid ", ";\n"], ["\n  /* stylelint-disable declaration-block-no-duplicate-properties */\n  position: -webkit-sticky;\n  position: sticky;\n  /* stylelint-enable */\n\n  flex: 1 100%;\n  bottom: 0;\n  background: ", ";\n  z-index: 2;\n  border-top: 1px solid ", ";\n"])), branding_1.color.white, branding_1.color.lightGray);
var StyledContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  padding: ", " 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  padding: ", " 0;\n"])), branding_1.space.l);
exports.StyledBottomSection = {
    Container: StyledContainer,
    Content: StyledContent,
};
var templateObject_1, templateObject_2;
