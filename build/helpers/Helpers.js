"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../button");
var baseSection_1 = require("../layout/section/baseSection");
var Helpers_style_1 = require("./Helpers.style");
var Helpers = function (_a) {
    var illustration = _a.illustration, content = _a.content, onClick = _a.onClick;
    var title = content.title, paragraph = content.paragraph, button = content.button;
    return (react_1.default.createElement(Helpers_style_1.StyledHelpers.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement(Helpers_style_1.StyledHelpers.Wrapper, null,
                react_1.default.createElement(Helpers_style_1.StyledHelpers.Content, null,
                    react_1.default.createElement(Helpers_style_1.StyledHelpers.Title, { isInverted: true }, title),
                    react_1.default.createElement(Helpers_style_1.StyledHelpers.Paragraph, { isInverted: true }, paragraph),
                    react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.SECONDARY, onClick: onClick }, button)),
                react_1.default.createElement(Helpers_style_1.StyledHelpers.Illustration, null, illustration)))));
};
exports.Helpers = Helpers;
