"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialOffer = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../button");
var disclaimer_1 = require("../disclaimer");
var infoIcon_1 = require("../icon/infoIcon");
var paragraph_1 = require("../paragraph");
var subHeader_1 = require("../subHeader");
var SpecialOffer_style_1 = require("./SpecialOffer.style");
var SpecialOffer = function (props) {
    var picture = props.picture, title = props.title, description = props.description, informationLink = props.informationLink, _a = props.actions, actions = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOffer, null,
        react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOfferContent, null,
            react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOfferFigure, null,
                react_1.default.createElement("img", { src: picture.url, alt: picture.alt }))),
        react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOfferContent, null,
            react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOfferText, null,
                react_1.default.createElement(subHeader_1.SubHeader, null, title),
                react_1.default.createElement(paragraph_1.Paragraph, null, description),
                informationLink && (react_1.default.createElement(disclaimer_1.Disclaimer, { icon: react_1.default.createElement(infoIcon_1.InfoIcon, null) },
                    react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.UNSTYLED, href: informationLink.url }, informationLink.label)))),
            react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOfferButtons, null, actions.map(function (action) { return (react_1.default.createElement(SpecialOffer_style_1.StyledSpecialOfferButton, { key: action.label }, 'onClick' in action ? (react_1.default.createElement(button_1.Button, { onClick: action.onClick }, action.label)) : (react_1.default.createElement(button_1.Button, { href: action.url }, action.label)))); })))));
};
exports.SpecialOffer = SpecialOffer;
