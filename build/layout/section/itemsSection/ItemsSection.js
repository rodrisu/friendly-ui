"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsSection = void 0;
var react_1 = __importDefault(require("react"));
var ItemsSection_style_1 = require("./ItemsSection.style");
/**
 * Items Section: display a list of items in a display: flex.
 * Use with two items.
 */
var ItemsSection = function (props) {
    var className = props.className, children = props.children, _a = props.tag, tag = _a === void 0 ? react_1.default.createElement("div", null) : _a;
    return (react_1.default.createElement(ItemsSection_style_1.StyledItemsSection, { tagName: tag.type, className: className, contentClassName: "kirk-items-section-content", noHorizontalSpacing: true }, children));
};
exports.ItemsSection = ItemsSection;
