"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = exports.BaseIconDefaultProps = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var badge_1 = require("../../badge");
var branding_1 = require("../branding");
exports.BaseIconDefaultProps = {
    className: '',
    iconClassName: '',
    iconColor: branding_1.color.lightMidnightGreen,
    size: 24,
    title: '',
    badgeAriaLabel: '',
    badgeContent: '',
    isDisabled: false,
};
var BaseIcon = function (_a) {
    var className = _a.className, iconClassName = _a.iconClassName, size = _a.size, title = _a.title, children = _a.children, _b = _a.viewBox, viewBox = _b === void 0 ? '0 0 24 24' : _b, badgeContent = _a.badgeContent, badgeAriaLabel = _a.badgeAriaLabel;
    var iconClasses = ['kirk-icon', iconClassName];
    if (!badgeContent) {
        // When there is no badge, the icon is not wrapped and is the root element.
        // Therefore className classes needs to be added to the icon itself.
        iconClasses.push(className);
    }
    var icon = (react_1.default.createElement("svg", { viewBox: viewBox, xmlns: "http://www.w3.org/2000/svg", className: (0, classcat_1.default)(iconClasses), width: size, height: size, "aria-hidden": (0, lodash_isempty_1.default)(title) },
        title && react_1.default.createElement("title", null, title),
        children));
    if (badgeContent) {
        return (react_1.default.createElement("div", { className: (0, classcat_1.default)(['kirk-icon-wrapper', className]) },
            icon,
            react_1.default.createElement(badge_1.Badge, { className: "kirk-icon-badge", "aria-label": badgeAriaLabel }, badgeContent)));
    }
    return icon;
};
exports.BaseIcon = BaseIcon;
