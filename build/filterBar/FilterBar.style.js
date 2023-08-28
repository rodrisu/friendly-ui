"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCta = exports.StyledSupplyInfoItem = exports.StyledSupplyInfo = exports.StyledFilterBar = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
var supplyItemHeight = '52px';
exports.StyledFilterBar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  max-width: ", ";\n  margin: auto;\n  /* Make the button not moving up & down when Loader becomes visible */\n  min-height: 100px;\n"], ["\n  display: flex;\n  align-items: center;\n  ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  max-width: ", ";\n  margin: auto;\n  /* Make the button not moving up & down when Loader becomes visible */\n  min-height: 100px;\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.space.xl, branding_1.space.xl, branding_1.componentSizes.smallSectionWidth);
exports.StyledSupplyInfo = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.StyledSupplyInfoItem = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-right: ", ";\n  display: block;\n  text-align: center;\n  height: ", "; /** Avoids the button to move up & down with isLoading prop */\n\n  svg {\n    display: block;\n  }\n"], ["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-right: ", ";\n  display: block;\n  text-align: center;\n  height: ", "; /** Avoids the button to move up & down with isLoading prop */\n\n  svg {\n    display: block;\n  }\n"])), branding_1.space.l, supplyItemHeight);
exports.StyledCta = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
