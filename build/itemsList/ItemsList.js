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
exports.ItemsList = exports.ItemsListDivider = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var interfaces_1 = require("../_utils/interfaces");
var contentDivider_1 = require("../divider/contentDivider");
var ItemsList_style_1 = require("./ItemsList.style");
var ItemsListDivider = function () { return null; };
exports.ItemsListDivider = ItemsListDivider;
// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
var ItemsListDividerType = (react_1.default.createElement(exports.ItemsListDivider, null)).type;
var ItemsList = function (props) {
    var children = props.children, _a = props.className, className = _a === void 0 ? '' : _a, _b = props.withSeparators, withSeparators = _b === void 0 ? false : _b, _c = props.keyGenerator, keyGenerator = _c === void 0 ? function (i) { return i; } : _c;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    // Remove all falsy items.
    // Falsy items can be added when using this pattern:
    // <ItemsList>
    //   <SomeItem />
    //   {shouldShowListItem && <SomeItem>} // shouldShowListItem value will be inserted in the list
    //   <SomeItem />
    // </ItemsList>
    var items = Array.isArray(children) ? children : [children];
    var filteredChildren = items.filter(Boolean);
    return (react_1.default.createElement(ItemsList_style_1.StyledItemsList, __assign({ className: (0, classcat_1.default)(['kirk-items-list', className]) }, a11yAttrs), filteredChildren.map(function (item, index) {
        if (item.type === ItemsListDividerType || item.type === undefined) {
            return null;
        }
        var isLast = filteredChildren.length === index + 1;
        var hasSeparator = !isLast && (filteredChildren[index + 1].type === ItemsListDividerType || withSeparators);
        return (react_1.default.createElement("li", { className: (0, classcat_1.default)(['kirk-items-list-item']), key: keyGenerator(index) },
            item,
            hasSeparator && react_1.default.createElement(contentDivider_1.ContentDivider, null)));
    })));
};
exports.ItemsList = ItemsList;
