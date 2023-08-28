"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBar = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var TopBar_style_1 = require("./TopBar.style");
var TopBar = function (_a) {
    var className = _a.className, leftItem = _a.leftItem, rightItem = _a.rightItem, centerItem = _a.centerItem, zIndex = _a.zIndex, hasScrolled = _a.hasScrolled;
    var children = [];
    if (leftItem) {
        children.push(react_1.default.createElement("div", { key: "leftItem", className: "kirk-topBar-left" }, leftItem));
    }
    if (centerItem) {
        children.push(react_1.default.createElement("div", { key: "centerItem", className: "kirk-topBar-center" }, centerItem));
    }
    if (rightItem) {
        children.push(react_1.default.createElement("div", { key: "rightItem", className: "kirk-topBar-right" }, rightItem));
    }
    return (react_1.default.createElement(TopBar_style_1.StyledTopBar, { className: (0, classcat_1.default)(['kirk-topBar', { 'kirk-topBar--scrolled': hasScrolled }, className]), "$zIndex": zIndex },
        react_1.default.createElement("div", { className: "kirk-topBar-inner" }, children)));
};
exports.TopBar = TopBar;
