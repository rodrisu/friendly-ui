"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledColumnedItemsListSection = exports.Toggle = exports.ListItemChoice = exports.List = exports.ListWrapper = exports.SubTitle = exports.MainTitle = exports.Wrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var button_1 = require("../../../button");
var itemChoice_1 = require("../../../itemChoice");
var itemsList_1 = require("../../../itemsList");
var display1_1 = require("../../../typography/display1");
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.MainTitle = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", " 0 ", ";\n"], ["\n  padding: ", " 0 ", ";\n"])), branding_1.space.l, branding_1.space.xl);
exports.SubTitle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 0 ", ";\n  font-size: ", ";\n  color: ", ";\n"], ["\n  padding: 0 0 ", ";\n  font-size: ", ";\n  color: ", ";\n"])), branding_1.space.l, branding_1.font.m.size, branding_1.color.lightMidnightGreen);
exports.ListWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
exports.List = (0, styled_components_1.default)(itemsList_1.ItemsList)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-grow: 1;\n  flex-basis: 100%;\n"], ["\n  flex-grow: 1;\n  flex-basis: 100%;\n"])));
exports.ListItemChoice = (0, styled_components_1.default)(itemChoice_1.ItemChoice)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-grow: 1;\n  display: ", ";\n"], ["\n  flex-grow: 1;\n  display: ", ";\n"])), function (props) { return props.hidden && 'none'; });
exports.Toggle = (0, styled_components_1.default)(button_1.Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  && {\n    padding: ", " 0 ", ";\n  }\n"], ["\n  && {\n    padding: ", " 0 ", ";\n  }\n"])), branding_1.space.m, branding_1.space.l);
exports.StyledColumnedItemsListSection = {
    Wrapper: exports.Wrapper,
    MainTitle: exports.MainTitle,
    SubTitle: exports.SubTitle,
    ListWrapper: exports.ListWrapper,
    List: exports.List,
    ListItemChoice: exports.ListItemChoice,
    Toggle: exports.Toggle,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
