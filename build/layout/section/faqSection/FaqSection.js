"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqSection = void 0;
var react_1 = __importDefault(require("react"));
var lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
var button_1 = require("../../../button");
var contentDivider_1 = require("../../../divider/contentDivider");
var spacingDivider_1 = require("../../../divider/spacingDivider");
var baseSection_1 = require("../../../layout/section/baseSection");
var paragraph_1 = require("../../../paragraph");
var FaqSection_style_1 = require("./FaqSection.style");
/**
 * A specialized section with multiple expandable paragraphs with Questions & Answers.
 */
var FaqSection = function (props) {
    var className = props.className, items = props.items, mainTitle = props.mainTitle, buttonLabel = props.buttonLabel, buttonHref = props.buttonHref, expandLabel = props.expandLabel;
    var renderFaqItem = function (_a) {
        var question = _a.question, answer = _a.answer;
        var id = (0, lodash_uniqueid_1.default)('faq-item-');
        return (react_1.default.createElement(FaqSection_style_1.StyledFaqSection.ListItem, { key: id },
            react_1.default.createElement(FaqSection_style_1.StyledFaqSection.Question, { as: "h3" }, question),
            react_1.default.createElement(paragraph_1.Paragraph, { isExpandable: true, expandLabel: expandLabel }, answer),
            react_1.default.createElement(contentDivider_1.ContentDivider, null),
            react_1.default.createElement(spacingDivider_1.SpacingDivider, { size: spacingDivider_1.SpacingDividerSize.SMALL })));
    };
    return (react_1.default.createElement(FaqSection_style_1.StyledFaqSection.Section, { contentSize: baseSection_1.SectionContentSize.LARGE, tagName: "article", noHorizontalSpacing: true, className: className },
        mainTitle && react_1.default.createElement(FaqSection_style_1.StyledFaqSection.Title, { as: "h2" }, mainTitle),
        react_1.default.createElement(FaqSection_style_1.StyledFaqSection.List, null, items.map(function (item) { return renderFaqItem(item); })),
        buttonLabel && buttonHref && (react_1.default.createElement(FaqSection_style_1.StyledFaqSection.ButtonWrapper, null,
            react_1.default.createElement(button_1.Button, { href: buttonHref }, buttonLabel)))));
};
exports.FaqSection = FaqSection;
