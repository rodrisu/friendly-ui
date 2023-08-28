"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
var react_1 = __importDefault(require("react"));
var qrCard_1 = require("../qrCard");
var Banner_style_1 = require("./Banner.style");
var Banner = function (_a) {
    var copy = _a.copy, actions = _a.actions, qrcode = _a.qrcode;
    return (react_1.default.createElement(Banner_style_1.StyledBanner, null,
        react_1.default.createElement(Banner_style_1.BannerElements.Content, null,
            react_1.default.createElement(Banner_style_1.BannerElements.Body, null,
                react_1.default.createElement(Banner_style_1.BannerElements.Heading, { as: "h2" }, copy.heading),
                react_1.default.createElement(Banner_style_1.BannerElements.Intro, { as: "p" }, copy.paragraph),
                actions && react_1.default.createElement(Banner_style_1.BannerElements.Actions, null, actions)),
            qrcode && (react_1.default.createElement(Banner_style_1.BannerElements.Media, null,
                react_1.default.createElement(Banner_style_1.BannerElements.Frame, null,
                    react_1.default.createElement(qrCard_1.QrCard, { imageUrl: qrcode.imageUrl, mainTitle: qrcode.mainTitle })))))));
};
exports.Banner = Banner;
