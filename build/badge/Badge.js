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
exports.Badge = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var interfaces_1 = require("../_utils/interfaces");
var Badge_style_1 = require("./Badge.style");
var Badge = function (props) {
    var className = props.className, children = props.children;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    if ((0, lodash_isempty_1.default)(children)) {
        return null;
    }
    return (react_1.default.createElement(Badge_style_1.StyledBadge, __assign({ className: (0, classcat_1.default)(['kirk-badge', className]) }, a11yAttrs),
        react_1.default.createElement("span", { "aria-hidden": !!a11yAttrs['aria-label'] }, children)));
};
exports.Badge = Badge;
