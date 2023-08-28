"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAction = exports.ItemActionStatus = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var item_1 = require("../_internals/item");
var _utils_1 = require("../_utils");
var interfaces_1 = require("../_utils/interfaces");
var Loader_1 = require("../loader/Loader");
exports.ItemActionStatus = item_1.ItemStatus;
var ItemAction = /** @class */ (function (_super) {
    __extends(ItemAction, _super);
    function ItemAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemAction.prototype.render = function () {
        var _a = this.props, highlighted = _a.highlighted, className = _a.className, action = _a.action, subLabel = _a.subLabel, leftAddon = _a.leftAddon, tag = _a.tag, href = _a.href, status = _a.status, onClick = _a.onClick, onBlur = _a.onBlur, onFocus = _a.onFocus, onMouseDown = _a.onMouseDown, onDoneAnimationEnd = _a.onDoneAnimationEnd, _b = _a.hideHoverBackground, hideHoverBackground = _b === void 0 ? false : _b, _c = _a.hasHorizontalSpacing, hasHorizontalSpacing = _c === void 0 ? false : _c;
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        var rightAddon;
        if (status === item_1.ItemStatus.LOADING) {
            rightAddon = (react_1.default.createElement(Loader_1.Loader, { className: (0, classcat_1.default)((0, _utils_1.prefix)({ chevron: true })), size: 24, onDoneAnimationEnd: onDoneAnimationEnd, inline: true }));
        }
        if (status === item_1.ItemStatus.CHECKED) {
            rightAddon = (react_1.default.createElement(Loader_1.Loader, { className: (0, classcat_1.default)((0, _utils_1.prefix)({ chevron: true })), size: 24, onDoneAnimationEnd: onDoneAnimationEnd, done: true, inline: true }));
        }
        return (react_1.default.createElement(item_1.Item, __assign({ highlighted: highlighted, className: className, leftAddon: leftAddon, leftTitle: action, leftBody: subLabel, rightAddon: rightAddon, href: href, onClick: onClick, onBlur: onBlur, onFocus: onFocus, onMouseDown: onMouseDown, tag: tag, isClickable: true, hideHoverBackground: hideHoverBackground, hasHorizontalSpacing: hasHorizontalSpacing }, a11yAttrs)));
    };
    ItemAction.defaultProps = {
        highlighted: true,
        status: item_1.ItemStatus.DEFAULT,
        // eslint-disable-next-line react/button-has-type
        tag: react_1.default.createElement("button", null),
    };
    ItemAction.STATUS = item_1.ItemStatus;
    return ItemAction;
}(react_1.PureComponent));
exports.ItemAction = ItemAction;
