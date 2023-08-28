"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaContentSection = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../button");
var column_1 = require("../../../layout/column");
var columns_1 = require("../../../layout/columns");
var baseSection_1 = require("../../../layout/section/baseSection");
var MediaContentSection_style_1 = require("./MediaContentSection.style");
/**
 * A specialized section which show some marketing content associated with a picture.
 */
var MediaContentSection = function (_a) {
    var media = _a.media, title = _a.title, content = _a.content, buttonLabel = _a.buttonLabel, buttonHref = _a.buttonHref, buttonClick = _a.buttonClick;
    var showButton = Boolean(buttonHref && buttonLabel);
    var showParagraph = Boolean(content);
    return (react_1.default.createElement(MediaContentSection_style_1.StyledMediaContentSection.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { tagName: "article", contentSize: baseSection_1.SectionContentSize.LARGE },
            react_1.default.createElement(columns_1.Columns, null,
                react_1.default.createElement(column_1.Column, null,
                    react_1.default.createElement(MediaContentSection_style_1.StyledMediaContentSection.Media, null, media)),
                react_1.default.createElement(column_1.Column, null,
                    react_1.default.createElement(MediaContentSection_style_1.StyledMediaContentSection.Content, null,
                        react_1.default.createElement(MediaContentSection_style_1.StyledMediaContentSection.Title, null, title),
                        showParagraph && (react_1.default.createElement(MediaContentSection_style_1.StyledMediaContentSection.Paragraph, { as: "p" }, content)),
                        showButton && (react_1.default.createElement(button_1.Button, { href: buttonHref, onClick: buttonClick }, buttonLabel))))))));
};
exports.MediaContentSection = MediaContentSection;
