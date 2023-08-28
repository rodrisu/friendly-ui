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
exports.ItemInfo = void 0;
var react_1 = __importDefault(require("react"));
var item_1 = require("../_internals/item");
var interfaces_1 = require("../_utils/interfaces");
var ItemInfo = function (props) {
    var mainInfo = props.mainInfo, className = props.className, mainTitle = props.mainTitle, icon = props.icon, tag = props.tag, _a = props.hasHorizontalSpacing, hasHorizontalSpacing = _a === void 0 ? false : _a;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(item_1.Item, __assign({ className: className, leftTitle: mainTitle, leftBody: mainInfo, leftAddon: icon, tag: tag, hasHorizontalSpacing: hasHorizontalSpacing }, a11yAttrs)));
};
exports.ItemInfo = ItemInfo;
