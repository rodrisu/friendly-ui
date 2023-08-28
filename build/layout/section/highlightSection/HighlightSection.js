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
exports.HighlightSection = void 0;
var react_1 = __importStar(require("react"));
var lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
var HighlightSection_style_1 = require("./HighlightSection.style");
var GridListItems = function (_a) {
    var items = _a.items;
    var listItems = items.map(function (_a) {
        var id = _a.id, label = _a.label, data = _a.data, hidden = _a.hidden, href = _a.href;
        return (react_1.default.createElement(HighlightSection_style_1.Col, { key: id, hidden: hidden },
            react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Item, { label: label, data: data, href: href })));
    });
    return react_1.default.createElement(HighlightSection_style_1.Grid, null, listItems);
};
var HighlightContentItems = function (_a) {
    var heading = _a.heading, items = _a.items;
    return (react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Article, null,
        react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Title, { as: "h2" }, heading),
        react_1.default.createElement(GridListItems, { items: items })));
};
var DEFAULT_ITEMS_SIZE = 3;
var setFocus = function (collapsed) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var collapsibleRegionWrapper = (0, react_1.useRef)();
    var focusCollapsibleRegion = function () {
        var collapsibleRegion = collapsibleRegionWrapper.current;
        collapsibleRegion.focus();
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, react_1.useEffect)(function () {
        if (!collapsed) {
            focusCollapsibleRegion();
        }
    }, [collapsed]);
    return collapsibleRegionWrapper;
};
var HighlightSection = function (_a) {
    var highlights = _a.highlights, toggle = _a.toggle, className = _a.className;
    var _b = (0, react_1.useState)(true), collapsed = _b[0], setCollapsed = _b[1];
    var featured = highlights.featured, optional = highlights.optional;
    var displayedItems = featured.items.map(function (item, index) { return (__assign(__assign({}, item), { hidden: collapsed && index >= DEFAULT_ITEMS_SIZE })); });
    var collapsibleRegionId = (0, lodash_uniqueid_1.default)('region-');
    // Set Focus
    var collapsibleRegionWrapper = optional ? setFocus(collapsed) : null;
    return (react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Section, { className: className },
        react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Content, null,
            react_1.default.createElement(HighlightContentItems, { heading: featured.heading, items: displayedItems }),
            optional && (react_1.default.createElement("div", { id: collapsibleRegionId, ref: collapsibleRegionWrapper, hidden: collapsed, "aria-hidden": collapsed, role: "region", tabIndex: -1 },
                react_1.default.createElement(HighlightContentItems, { heading: optional.heading, items: optional.items }))),
            react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Actions, null,
                react_1.default.createElement(HighlightSection_style_1.HighlightSectionElements.Button, { onClick: function () { return setCollapsed(!collapsed); }, "aria-expanded": !collapsed, "aria-controls": collapsibleRegionId }, toggle[collapsed ? 'on' : 'off'])))));
};
exports.HighlightSection = HighlightSection;
