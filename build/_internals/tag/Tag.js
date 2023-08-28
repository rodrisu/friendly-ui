"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var react_1 = __importDefault(require("react"));
var Tag_style_1 = require("./Tag.style");
var Tag = function (_a) {
    var label = _a.label;
    return react_1.default.createElement(Tag_style_1.StyledTag, null, label);
};
exports.Tag = Tag;
