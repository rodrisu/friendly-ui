"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledChevronIcon = exports.StyledProximity = exports.StyledSubLabel = exports.StyledLabel = exports.StyledContent = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var chevronIcon_1 = require("../icon/chevronIcon");
var caption_1 = require("../typography/caption");
var titleStrong_1 = require("../typography/titleStrong");
exports.StyledContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  flex: 1;\n  padding: ", " ", " ", " 0;\n"], ["\n  position: relative;\n  flex: 1;\n  padding: ", " ", " ", " 0;\n"])), branding_1.space.m, function (props) { return (props.hasLink ? branding_1.space.xl : 0); }, branding_1.space.m);
exports.StyledLabel = (0, styled_components_1.default)(titleStrong_1.TextTitleStrong)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return (props.$highlighted ? "color: ".concat(branding_1.color.blue) : ''); });
exports.StyledSubLabel = (0, styled_components_1.default)(caption_1.TextCaption)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  margin-top: ", ";\n"], ["\n  display: block;\n  color: ", ";\n  margin-top: ", ";\n"])), function (_a) {
    var $highlighted = _a.$highlighted;
    return ($highlighted ? branding_1.color.blue : branding_1.color.midnightGreen);
}, branding_1.space.s);
exports.StyledProximity = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
exports.StyledChevronIcon = (0, styled_components_1.default)(chevronIcon_1.ChevronIcon)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
