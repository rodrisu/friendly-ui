"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsSection = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var tabs_1 = require("../../../tabs");
var TabsSection_style_1 = require("./TabsSection.style");
/**
 * A specialized section based on the Tabs component.
 * The tabs section will visually separate (i.e. section) the page horizontally
 * with a line between the tabs and their panels.
 *
 * If you need the non full-width tabs (to use a in a multi column layout), use the <Tabs> widget
 * directly instead.
 */
var TabsSection = function (props) {
    var className = props.className, tabsProps = props.tabsProps;
    return (react_1.default.createElement(TabsSection_style_1.StyledTabsSection, null,
        react_1.default.createElement(tabs_1.Tabs, __assign({ className: (0, classcat_1.default)(className) }, tabsProps))));
};
exports.TabsSection = TabsSection;
