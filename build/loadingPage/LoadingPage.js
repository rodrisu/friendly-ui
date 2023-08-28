"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingPage = void 0;
var react_1 = __importDefault(require("react"));
var theVoice_1 = require("../theVoice");
var LoadingPage_style_1 = require("./LoadingPage.style");
var LoadingPage = function (_a) {
    var DisplayedIcon = _a.icon, iconColor = _a.iconColor, iconBackground = _a.iconBackground, title = _a.title;
    return (react_1.default.createElement(LoadingPage_style_1.StyledLoadingPage, null,
        react_1.default.createElement("div", { className: "content-container" },
            DisplayedIcon && (react_1.default.createElement("div", { className: "logo", style: { backgroundColor: iconBackground } },
                react_1.default.createElement(DisplayedIcon, { iconColor: iconColor }))),
            title && react_1.default.createElement(theVoice_1.TheVoice, null, title))));
};
exports.LoadingPage = LoadingPage;
