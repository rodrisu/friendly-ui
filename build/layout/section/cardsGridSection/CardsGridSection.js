"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsGridSection = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var Card_style_1 = require("../../../_internals/card/Card.style");
var button_1 = require("../../../button");
var spacingDivider_1 = require("../../../divider/spacingDivider");
var baseSection_1 = require("../../../layout/section/baseSection");
var CardsGridSection_style_1 = require("./CardsGridSection.style");
var CardsGridSection = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.contentSize, contentSize = _c === void 0 ? baseSection_1.SectionContentSize.SMALL : _c, title = _a.title, buttonTitle = _a.buttonTitle, buttonHref = _a.buttonHref;
    return (react_1.default.createElement(CardsGridSection_style_1.StyledCardsGridSection, { className: (0, classcat_1.default)([
            'kirk-cardsGridSection-wrapper',
            {
                'kirk-cardsGridSection-wrapper--large': contentSize === baseSection_1.SectionContentSize.LARGE,
            },
            className,
        ]) },
        title && (react_1.default.createElement(baseSection_1.BaseSection, { contentSize: contentSize },
            react_1.default.createElement("h2", null,
                react_1.default.createElement(CardsGridSection_style_1.StyledTitle, null, title)))),
        react_1.default.createElement("ul", { className: (0, classcat_1.default)(['kirk-cardsGridSection']) }, react_1.default.Children.map(children, function (child) { return (react_1.default.createElement(Card_style_1.StyledCardContainer, { className: "kirk-cardItem", noHorizontalSpacing: true }, child)); })),
        buttonTitle && buttonHref && (react_1.default.createElement("div", { className: "kirk-cardsGridSection-button" },
            react_1.default.createElement(button_1.Button, { href: buttonHref }, buttonTitle),
            react_1.default.createElement(spacingDivider_1.SpacingDivider, { size: spacingDivider_1.SpacingDividerSize.LARGE })))));
};
exports.CardsGridSection = CardsGridSection;
