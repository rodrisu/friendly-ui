"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marquee = void 0;
var react_1 = __importDefault(require("react"));
var Marquee_style_1 = require("./Marquee.style");
var Marquee = function (props) {
    var className = props.className, children = props.children;
    return (react_1.default.createElement(Marquee_style_1.StyledMarquee, { className: className }, children.filter(Boolean).map(function (child, index) {
        var key = "marquee-item-".concat(index);
        return (react_1.default.createElement(Marquee_style_1.StyledMarqueeItem, { position: index, totalItems: children.length, key: key }, child));
    })));
};
exports.Marquee = Marquee;
