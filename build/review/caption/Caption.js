"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../../button");
var caption_1 = require("../../typography/caption");
var Caption_style_1 = require("./Caption.style");
var Caption = function (_a) {
    var children = _a.children, href = _a.href, onClick = _a.onClick, secondaryText = _a.secondaryText, isoDate = _a.isoDate;
    return (react_1.default.createElement(Caption_style_1.StyledCaption, null,
        react_1.default.createElement("time", { dateTime: isoDate },
            react_1.default.createElement(caption_1.TextCaption, null, children)),
        secondaryText && (react_1.default.createElement(caption_1.TextCaption, null,
            react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.UNSTYLED, href: href, onClick: onClick }, secondaryText)))));
};
exports.Caption = Caption;
