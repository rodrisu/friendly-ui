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
exports.AutoComplete = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var _utils_1 = require("../_utils");
var contentDivider_1 = require("../divider/contentDivider");
var itemInfo_1 = require("../itemInfo");
var loader_1 = require("../loader");
var textField_1 = require("../textField");
var AutoComplete_style_1 = require("./AutoComplete.style");
var AutoCompleteListStyle_1 = require("./AutoCompleteListStyle");
var initialState = {
    busy: false,
    items: [],
    formattedValue: '',
    textfieldValue: '',
    lastDefaultValue: '',
    query: '',
    noResults: false,
    isSearching: false,
};
var AutoComplete = /** @class */ (function (_super) {
    __extends(AutoComplete, _super);
    function AutoComplete(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputKeydown = function (e) {
            var KEY_CODE_ENTER = 13;
            if (e.keyCode === KEY_CODE_ENTER) {
                e.preventDefault();
            }
        };
        _this.onInputChange = function (_a) {
            var value = _a.value;
            var textfieldValue = String(value);
            if (_this.hasMinCharsForSearch(textfieldValue)) {
                _this.setState({
                    textfieldValue: textfieldValue,
                    noResults: false,
                    query: value,
                }, _this.searchForItems);
            }
            else {
                _this.clearBusyTimeout();
                _this.setState({
                    textfieldValue: String(value),
                    noResults: false,
                    busy: false,
                    items: [],
                });
            }
            _this.props.onInputChange({ value: value });
        };
        _this.onSelectItem = function (item) {
            var query = _this.props.renderQuery(item);
            _this.setState({
                items: [],
                textfieldValue: query,
                query: query,
                formattedValue: _this.props.getItemValue(item),
            }, function () {
                _this.input.select();
                _this.props.onSelect({
                    name: _this.props.name,
                    value: _this.state.formattedValue,
                    item: item,
                });
            });
        };
        _this.searchForItems = function () {
            // If a long `debounceTimeout` is setup, it may happen that a `searchForItems`
            // is still scheduled to be called while the user has modified the query
            // during that lapse of time. Therefore, the check below verify the real input value
            // against the searchForItemsMinChars prop.
            if (!_this.hasMinCharsForSearch(_this.state.textfieldValue)) {
                return;
            }
            _this.busyTimeout = window.setTimeout(_this.showBusy, _this.props.busyTimeout);
            _this.props.searchForItems(_this.state.query);
        };
        _this.clearBusyTimeout = function () {
            if (_this.busyTimeout) {
                _this.busyTimeout = clearTimeout(_this.busyTimeout);
            }
        };
        _this.showBusy = function () {
            _this.setState({ busy: true });
        };
        _this.inputRef = function (input) {
            _this.input = input;
        };
        if (props.debounceTimeout > 0) {
            _this.searchForItems = (0, lodash_debounce_1.default)(_this.searchForItems, props.debounceTimeout);
        }
        _this.state = __assign(__assign({}, initialState), { query: _this.props.defaultValue, lastDefaultValue: _this.props.defaultValue, textfieldValue: _this.props.defaultValue });
        return _this;
    }
    AutoComplete.prototype.componentDidMount = function () {
        if (this.props.searchOnMount) {
            // Triggers the search when the autocomplete is initialised with a default value
            this.searchForItems();
        }
        if (this.input && exenv_1.canUseEventListeners) {
            this.input.addEventListener('keydown', this.onInputKeydown);
        }
    };
    AutoComplete.getDerivedStateFromProps = function (props, state) {
        var hasDefaultValueChanged = state.lastDefaultValue !== props.defaultValue;
        var baseState = hasDefaultValueChanged
            ? {
                textfieldValue: props.defaultValue,
                lastDefaultValue: props.defaultValue,
                items: [],
            }
            : {};
        if (hasDefaultValueChanged) {
            return __assign(__assign({}, baseState), { isSearching: props.isSearching });
        }
        if (state.isSearching && !props.isSearching) {
            return __assign(__assign({}, baseState), { isSearching: false, busy: false, noResults: (0, lodash_isempty_1.default)(props.items), items: props.items });
        }
        if (state.isSearching !== props.isSearching) {
            return __assign(__assign({}, baseState), { isSearching: props.isSearching });
        }
        return null;
    };
    AutoComplete.prototype.componentDidUpdate = function (prevProps) {
        var shouldRenderItems = this.props.isSearching && !prevProps.isSearching;
        if (shouldRenderItems) {
            this.clearBusyTimeout();
        }
    };
    AutoComplete.prototype.componentWillUnmount = function () {
        if (this.input && exenv_1.canUseEventListeners) {
            this.input.removeEventListener('keydown', this.onInputKeydown);
        }
    };
    AutoComplete.prototype.hasMinCharsForSearch = function (value) {
        return value.length >= this.props.searchForItemsMinChars;
    };
    AutoComplete.prototype.reset = function () {
        this.setState(initialState);
    };
    AutoComplete.prototype.render = function () {
        var hasMinCharsForSearch = this.hasMinCharsForSearch(this.state.textfieldValue);
        var shouldDisplayEmptyState = !hasMinCharsForSearch && this.props.showList && !(0, lodash_isempty_1.default)(this.props.renderEmptySearch);
        var shouldDisplayBusyState = this.state.busy && this.props.showList;
        var shouldDisplayNoResults = hasMinCharsForSearch && !this.state.busy && this.state.noResults && this.props.showList;
        var shouldDisplayAutoCompleteList = hasMinCharsForSearch && !(0, lodash_isempty_1.default)(this.state.items) && !this.state.busy && this.props.showList;
        var listItems = shouldDisplayAutoCompleteList
            ? this.state.items
            : this.props.renderEmptySearch;
        var shouldDisplayDivider = this.props.embeddedInSearchForm && (listItems.length > 0 || shouldDisplayNoResults);
        var loader = this.props.embeddedInSearchForm && this.state.isSearching ? (react_1.default.createElement(loader_1.Loader, { className: "kirk-autoComplete-loader", size: 24, inline: true })) : null;
        return (
        /* TODO: BBC-7413 fix a11y issue */
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        react_1.default.createElement(AutoComplete_style_1.StyledAutoComplete, { role: "combobox", className: (0, classcat_1.default)([(0, _utils_1.prefix)({ autoComplete: true }), this.props.className]) },
            react_1.default.createElement(textField_1.TextField, { type: textField_1.inputTypes.SEARCH, className: this.props.inputClassName, name: this.props.name, onChange: this.onInputChange, onFocus: this.props.onFocus, onBlur: this.props.onBlur, onClear: this.props.onClear, placeholder: this.props.placeholder, defaultValue: String(this.state.textfieldValue), addon: this.props.inputAddon, inputRef: this.inputRef, autoCorrect: this.props.autoCorrect, autoComplete: "off", autoFocus: this.props.autoFocus, focus: this.props.focus, buttonTitle: this.props.buttonTitle, disabled: this.props.disabled, readOnly: this.props.readOnly, required: this.props.required, error: this.props.error, focusBorder: false, loader: loader }),
            shouldDisplayDivider && react_1.default.createElement(contentDivider_1.ContentDivider, null),
            shouldDisplayBusyState && (react_1.default.createElement("div", { className: (0, classcat_1.default)([(0, _utils_1.prefix)({ 'autoComplete-body': true }), this.props.bodyClassName]) }, this.props.renderBusy({ query: this.state.query }))),
            shouldDisplayNoResults && (react_1.default.createElement("div", { className: (0, classcat_1.default)([this.props.bodyClassName]) },
                react_1.default.createElement(itemInfo_1.ItemInfo, { mainTitle: this.props.renderNoResults({
                        query: this.state.query,
                    }) }))),
            react_1.default.createElement(AutoCompleteListStyle_1.AutoCompleteList, { className: this.props.bodyClassName, name: "".concat(this.props.name, "-list"), items: listItems, maxItems: this.props.maxItems, onSelect: this.onSelectItem, visible: shouldDisplayAutoCompleteList || shouldDisplayEmptyState, selectedItemStatus: this.props.selectedItemStatus, itemClassName: this.props.itemClassName, onDoneAnimationEnd: this.props.onDoneAnimationEnd, itemKey: this.props.itemKey, withSeparators: !this.props.embeddedInSearchForm })));
    };
    AutoComplete.defaultProps = {
        searchOnMount: true,
        isSearching: false,
        searchForItemsMinChars: 3,
        maxItems: Infinity,
        renderBusy: function () { return react_1.default.createElement("div", null, "Loading\u2026"); },
        renderNoResults: function () { return 'No results'; },
        renderEmptySearch: [],
        onInputChange: function () { },
        onSelect: function () { },
        onClear: function () { },
        renderQuery: function (item) { return [item.label, item.labelInfo].filter(Boolean).join(','); },
        getItemValue: function (item) { return item.label; },
        busyTimeout: 150,
        debounceTimeout: 500,
        autoFocus: false,
        focus: false,
        buttonTitle: null,
        defaultValue: '',
        showList: true,
        autoCorrect: 'off',
        disabled: false,
        readOnly: false,
        required: false,
        error: null,
        embeddedInSearchForm: false,
    };
    return AutoComplete;
}(react_1.Component));
exports.AutoComplete = AutoComplete;
