"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTheVoice = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
var display1_1 = require("../typography/display1");
exports.StyledTheVoice = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* @TODO: Align scale and spec\n  /* 32px it's not part of current scale. 4 it could be calculated by the base unit space.s  */\n  --space-bottom: 32px;\n  /* 40px is an exception on font scale  */\n  --font-size-desktop: 40px;\n\n  margin: 0;\n  padding: ", " 0 var(--space-bottom);\n  ", ";\n\n  @media (", ") {\n    text-align: center;\n    font-size: var(--font-size-desktop);\n  }\n"], ["\n  /* @TODO: Align scale and spec\n  /* 32px it's not part of current scale. 4 it could be calculated by the base unit space.s  */\n  --space-bottom: 32px;\n  /* 40px is an exception on font scale  */\n  --font-size-desktop: 40px;\n\n  margin: 0;\n  padding: ", " 0 var(--space-bottom);\n  ", ";\n\n  @media (", ") {\n    text-align: center;\n    font-size: var(--font-size-desktop);\n  }\n"])), branding_1.space.xl, layoutNormalizer_1.normalizeHorizontally, branding_1.responsiveBreakpoints.isMediaLarge);
var templateObject_1;
