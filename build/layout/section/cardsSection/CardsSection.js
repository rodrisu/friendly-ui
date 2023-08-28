"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsSection = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var Card_style_1 = require("../../../_internals/card/Card.style");
var baseSection_1 = require("../../../layout/section/baseSection");
var CardsSection_style_1 = require("./CardsSection.style");
var CardsSection = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.contentSize, contentSize = _c === void 0 ? baseSection_1.SectionContentSize.SMALL : _c;
    return (react_1.default.createElement(CardsSection_style_1.StyledCardsSection, { className: (0, classcat_1.default)([
            'kirk-cardsSection-wrapper',
            {
                'kirk-cardsSection-wrapper--large': contentSize === baseSection_1.SectionContentSize.LARGE,
            },
            className,
        ]) },
        react_1.default.createElement("ul", { className: (0, classcat_1.default)(['kirk-cardsSection']) }, react_1.default.Children.map(children, function (child) { return (react_1.default.createElement(Card_style_1.StyledCardContainer, { className: "kirk-cardItem", noHorizontalSpacing: true }, child)); }))));
};
exports.CardsSection = CardsSection;
