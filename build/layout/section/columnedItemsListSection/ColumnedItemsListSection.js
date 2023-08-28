"use strict";
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
exports.ColumnedItemsListSection = void 0;
var react_1 = __importStar(require("react"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
var button_1 = require("../../../button");
var baseSection_1 = require("../../../layout/section/baseSection");
var ColumnedItemsListSection_style_1 = require("./ColumnedItemsListSection.style");
var COLLAPSED_LIST_SIZE = 3;
/**
 * A dedicated section including an items list that can be spread into X columns and collapsed after Y results
 */
var ColumnedItemsListSection = function (_a) {
    var _b = _a.expandLabel, expandLabel = _b === void 0 ? null : _b, itemsListInfo = _a.itemsListInfo, _c = _a.columns, columns = _c === void 0 ? 1 : _c, _d = _a.useExpandToggle, useExpandToggle = _d === void 0 ? false : _d, _e = _a.headingLevel, headingLevel = _e === void 0 ? 'h1' : _e, _f = _a.displayListOnly, displayListOnly = _f === void 0 ? false : _f, _g = _a.sectionContentSize, sectionContentSize = _g === void 0 ? baseSection_1.SectionContentSize.SMALL : _g;
    var mainTitle = itemsListInfo.mainTitle, subTitle = itemsListInfo.subTitle, list = itemsListInfo.list;
    var itemListId = (0, react_1.useRef)((0, lodash_uniqueid_1.default)('item-list-'));
    var _h = (0, react_1.useState)(!useExpandToggle), isExpanded = _h[0], setIsExpanded = _h[1];
    var displayExpandedList = function () {
        setIsExpanded(!isExpanded);
    };
    var showToggle = useExpandToggle && !isExpanded && list.length > COLLAPSED_LIST_SIZE;
    var nbItemsPerColumn = Math.ceil(list.length / columns);
    var columnsArray = Array.from(Array(columns).keys());
    var countItems = 0;
    var itemsPerColumn = columnsArray.map(function (col) {
        var items = [];
        if (col === 0) {
            items = list.slice(0, nbItemsPerColumn);
        }
        else if (col === columns - 1) {
            items = list.slice(nbItemsPerColumn * col, list.length);
        }
        else {
            items = list.slice(nbItemsPerColumn * col, nbItemsPerColumn * (col + 1));
        }
        return items;
    });
    function isSlugItem(item) {
        return item.slugLink !== undefined;
    }
    function isLinkItem(item) {
        return item.href !== undefined;
    }
    return (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.Wrapper, null,
        !displayListOnly && (mainTitle || subTitle) && (react_1.default.createElement(baseSection_1.BaseSection, { contentSize: sectionContentSize },
            mainTitle && (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.MainTitle, { as: headingLevel }, mainTitle)),
            subTitle && (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.SubTitle, null, subTitle)))),
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: sectionContentSize, noHorizontalSpacing: true },
            react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.ListWrapper, null, itemsPerColumn.map(function (columnItems, index) {
                // if there's only one result to display but 2 columns are required,
                // the second column is empty and needs to be ignored
                if ((0, lodash_isempty_1.default)(columnItems)) {
                    return null;
                }
                return (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.List, { id: "".concat(itemListId.current, "-").concat(index), key: (0, lodash_uniqueid_1.default)('item-list-column-') }, columnItems.map(function (item) {
                    countItems += 1;
                    var collapsed = countItems > COLLAPSED_LIST_SIZE && !isExpanded;
                    if (isSlugItem(item)) {
                        return (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.ListItemChoice, { key: item.label.toString(), label: item.label, href: item.slugLink, hidden: collapsed, "aria-hidden": collapsed }));
                    }
                    if (isLinkItem) {
                        // Use onClick Js listener instead of an anchor to make sure these links
                        // are not SEO friendly.
                        return (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.ListItemChoice, { key: item.label.toString(), label: item.label, onClick: function () {
                                window.open(item.href);
                            }, hidden: collapsed, "aria-hidden": collapsed }));
                    }
                    return (react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.ListItemChoice, { key: item.label.toString(), label: item.label, hidden: collapsed, "aria-hidden": collapsed }));
                })));
            }))),
        showToggle && (react_1.default.createElement(baseSection_1.BaseSection, null,
            react_1.default.createElement(ColumnedItemsListSection_style_1.StyledColumnedItemsListSection.Toggle, { status: button_1.ButtonStatus.UNSTYLED, "aria-expanded": isExpanded, "aria-controls": itemListId.current, onClick: function () { return displayExpandedList(); } }, expandLabel && expandLabel)))));
};
exports.ColumnedItemsListSection = ColumnedItemsListSection;
