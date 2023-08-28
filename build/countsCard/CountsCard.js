"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountsCard = void 0;
var react_1 = __importDefault(require("react"));
var baseSection_1 = require("../layout/section/baseSection");
var body_1 = require("../typography/body");
var display1_1 = require("../typography/display1");
var CountsCard_style_1 = require("./CountsCard.style");
var CountsCard = function (_a) {
    var cards = _a.cards;
    return (react_1.default.createElement(CountsCard_style_1.StyledCountsCard.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement(CountsCard_style_1.StyledCountsCard.Card, { as: "ul" }, cards.map(function (_a) {
                var title = _a.title, description = _a.description;
                return (react_1.default.createElement(CountsCard_style_1.StyledCountsCard.Item, { key: title },
                    react_1.default.createElement(display1_1.TextDisplay1, null, title),
                    react_1.default.createElement(body_1.TextBody, null, description)));
            })))));
};
exports.CountsCard = CountsCard;
