"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaPage = void 0;
var react_1 = __importDefault(require("react"));
var seaPage_style_1 = require("./seaPage.style");
var SeaPage = function (_a) {
    var children = _a.children, heading = _a.heading, illustationUrl = _a.illustationUrl;
    return (react_1.default.createElement(seaPage_style_1.SeaPageElements.Wrapper, null,
        react_1.default.createElement(seaPage_style_1.SeaPageElements.Media, { small: illustationUrl.small, large: illustationUrl.large },
            react_1.default.createElement(seaPage_style_1.SeaPageElements.Heading, { as: "h1" }, heading)),
        react_1.default.createElement(seaPage_style_1.SeaPageElements.Body, null, children)));
};
exports.SeaPage = SeaPage;
