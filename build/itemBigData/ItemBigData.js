"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.ItemBigData = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("../_internals/item");
var interfaces_1 = require("../_utils/interfaces");
var display2_1 = require("../typography/display2");
var StyledItemBigData = (0, styled_components_1.default)(item_1.Item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .kirk-item-leftText {\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    .kirk-text-body {\n      white-space: normal;\n    }\n  }\n"], ["\n  & .kirk-item-leftText {\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    .kirk-text-body {\n      white-space: normal;\n    }\n  }\n"])));
var ItemBigData = function (props) {
    var mainInfo = props.mainInfo, className = props.className, mainTitle = props.mainTitle, tag = props.tag, _a = props.hasHorizontalSpacing, hasHorizontalSpacing = _a === void 0 ? false : _a;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(StyledItemBigData, __assign({ className: className, leftTitle: react_1.default.createElement(display2_1.TextDisplay2, null, mainTitle), leftBody: mainInfo, tag: tag, hasHorizontalSpacing: hasHorizontalSpacing }, a11yAttrs)));
};
exports.ItemBigData = ItemBigData;
var templateObject_1;
