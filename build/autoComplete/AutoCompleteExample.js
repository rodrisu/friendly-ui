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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteExample = void 0;
var react_1 = __importStar(require("react"));
var item_1 = require("../_internals/item");
var icon_1 = require("../icon");
var loader_1 = require("../loader");
var index_1 = require("./index");
var places = [
    {
        id: '1',
        label: 'Paris Saint Lazare',
        labelInfo: 'Rue d’Amsterdam, Paris',
        leftAddon: react_1.default.createElement(icon_1.ComfortIcon, null),
    },
    { id: '2', label: 'Paris Gare de Lyon', labelInfo: 'Rue d’Amsterdam, Paris' },
    { id: '3', label: 'Paris Rive Gauche' },
];
var AutoCompleteExample = function (_a) {
    var className = _a.className, _b = _a.searchForItemsDelay, searchForItemsDelay = _b === void 0 ? 0 : _b, _c = _a.renderEmptySearch, renderEmptySearch = _c === void 0 ? [] : _c, onSelect = _a.onSelect, inputAddon = _a.inputAddon, error = _a.error, defaultValue = _a.defaultValue, embeddedInSearchForm = _a.embeddedInSearchForm;
    var _d = (0, react_1.useState)([]), items = _d[0], setItems = _d[1];
    var _e = (0, react_1.useState)(false), isSearching = _e[0], setSearching = _e[1];
    var searchForItems = function (query) {
        setSearching(true);
        setTimeout(function () {
            setItems(places.filter(function (place) { return place.label.startsWith(query); }));
            setSearching(false);
        }, searchForItemsDelay);
    };
    return (react_1.default.createElement(index_1.AutoComplete, { className: className, name: "city", placeholder: "Search here", 
        // indicates whether it should display a loading state
        isSearching: isSearching, 
        // The default query
        defaultValue: defaultValue, 
        // define if searchForItems is called on mount.
        // If a default value is present it will search for it.
        searchOnMount: true, searchForItems: searchForItems, items: items, busyTimeout: 500, 
        // custom loading display
        renderBusy: function () { return react_1.default.createElement(loader_1.Loader, { size: 36, layoutMode: loader_1.LoaderLayoutMode.INLINE }); }, 
        // allow to display default results when there is no results.
        renderEmptySearch: renderEmptySearch, 
        // method called when an item is selected
        onSelect: onSelect, 
        // Format the autocomplete selected value
        getItemValue: function (item) { return item.id; }, 
        // Format the autocomplete display based on the selected item
        renderQuery: function (item) { return item.label; }, 
        // An error message to display
        error: error, 
        // max number of results that are display
        maxItems: 5, 
        // number of charachers required to trigger a search
        searchForItemsMinChars: 3, 
        // Display the status of the selected item, it can be loading or check
        selectedItemStatus: item_1.ItemStatus.DEFAULT, 
        // Display a given icon in the input field
        inputAddon: inputAddon, embeddedInSearchForm: embeddedInSearchForm }));
};
exports.AutoCompleteExample = AutoCompleteExample;
