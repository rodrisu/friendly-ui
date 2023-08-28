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
exports.ItemData = void 0;
var react_1 = __importDefault(require("react"));
var item_1 = require("../_internals/item");
var interfaces_1 = require("../_utils/interfaces");
var text_1 = require("../text");
var ItemData = function (props) {
    var mainInfo = props.mainInfo, data = props.data, dataColor = props.dataColor, dataIcon = props.dataIcon, dataStrikeThroughLabel = props.dataStrikeThroughLabel, dataInfoStrikeThroughLabel = props.dataInfoStrikeThroughLabel, className = props.className, mainTitle = props.mainTitle, mainTitleButtonAddon = props.mainTitleButtonAddon, dataInfo = props.dataInfo, tag = props.tag, disabled = props.disabled, _a = props.hasHorizontalSpacing, hasHorizontalSpacing = _a === void 0 ? false : _a, _b = props.tagLabel, tagLabel = _b === void 0 ? '' : _b;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(item_1.Item, __assign({ className: className, leftTitle: mainTitle, leftTitleButtonAddon: mainTitleButtonAddon, leftBody: mainInfo, rightTitle: data, rightTitleColor: dataColor, rightTitleStrikeThrough: Boolean(dataStrikeThroughLabel), rightTitleAriaProps: {
            'aria-label': dataStrikeThroughLabel,
        }, rightTitleDisplay: text_1.TextDisplayType.SUBHEADERSTRONG, rightTitleAddon: dataIcon, rightBody: dataInfo, rightBodyStrikeThrough: Boolean(dataInfoStrikeThroughLabel), rightBodyAriaProps: {
            'aria-label': dataInfoStrikeThroughLabel,
        }, tag: tag, disabled: disabled, hasHorizontalSpacing: hasHorizontalSpacing, tagLabel: tagLabel }, a11yAttrs)));
};
exports.ItemData = ItemData;
