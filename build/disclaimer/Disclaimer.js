"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disclaimer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("../_internals/item");
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var questionIcon_1 = require("../icon/questionIcon");
var text_1 = require("../text");
var StyledDisclaimer = (0, styled_components_1.default)(item_1.Item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .kirk-item {\n    color: ", ";\n  }\n"], ["\n  .kirk-item {\n    color: ", ";\n  }\n"])), branding_1.color.lightMidningGreen);
var deprecatedHelpButtonIcon = function (deprecatedHelpUrl) { return (react_1.default.createElement(button_1.Button, { href: deprecatedHelpUrl, status: button_1.ButtonStatus.UNSTYLED, isBubble: true },
    react_1.default.createElement(questionIcon_1.QuestionIcon, { iconColor: branding_1.color.blue }))); };
var Disclaimer = function (_a) {
    var icon = _a.icon, _b = _a.isCaption, isCaption = _b === void 0 ? true : _b, children = _a.children, _c = _a.deprecatedHelpUrl, deprecatedHelpUrl = _c === void 0 ? null : _c;
    return (react_1.default.createElement(StyledDisclaimer, { leftBody: children, leftBodyDisplay: isCaption ? text_1.TextDisplayType.CAPTION : text_1.TextDisplayType.BODY, leftAddon: icon, rightAddon: deprecatedHelpUrl ? deprecatedHelpButtonIcon(deprecatedHelpUrl) : null }));
};
exports.Disclaimer = Disclaimer;
var templateObject_1;
