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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteList = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var item_1 = require("../_internals/item");
var _utils_1 = require("../_utils");
var itemChoice_1 = require("../itemChoice");
var itemsList_1 = require("../itemsList");
var AutoCompleteList = /** @class */ (function (_super) {
    __extends(AutoCompleteList, _super);
    function AutoCompleteList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            highlightedIndex: null,
            selectedIndex: null,
        };
        _this.onKeyboardEventArrowDown = function (e) {
            e.preventDefault();
            if ((0, lodash_isempty_1.default)(_this.props.items)) {
                return;
            }
            var highlightedIndex = _this.state.highlightedIndex;
            var index = highlightedIndex === null || highlightedIndex === _this.props.items.length - 1
                ? 0
                : highlightedIndex + 1;
            _this.setState({
                highlightedIndex: index,
            });
        };
        _this.onKeyboardEventArrowUp = function (e) {
            e.preventDefault();
            if (!(0, lodash_isempty_1.default)(_this.props.items)) {
                var highlightedIndex = _this.state.highlightedIndex;
                var index = highlightedIndex === null || highlightedIndex === 0
                    ? _this.props.items.length - 1
                    : highlightedIndex - 1;
                _this.setState({
                    highlightedIndex: index,
                });
            }
        };
        _this.onKeyboardEventEnter = function (e) {
            e.preventDefault();
            var highlightedIndex = _this.state.highlightedIndex;
            if (highlightedIndex == null) {
                return;
            }
            var item = _this.props.items[highlightedIndex];
            _this.setState({ selectedIndex: highlightedIndex });
            _this.props.onSelect(item);
        };
        _this.handleKeydown = function (e) {
            if (e.keyCode === 13) {
                _this.onKeyboardEventEnter(e);
            }
            else if (e.keyCode === 38) {
                _this.onKeyboardEventArrowUp(e);
            }
            else if (e.keyCode === 40) {
                _this.onKeyboardEventArrowDown(e);
            }
        };
        _this.onSelect = function (itemIndex, item) {
            _this.setState({ selectedIndex: itemIndex }, function () {
                _this.props.onSelect(item);
            });
        };
        return _this;
    }
    AutoCompleteList.prototype.componentDidMount = function () {
        if (exenv_1.canUseEventListeners) {
            document.addEventListener('keydown', this.handleKeydown);
        }
    };
    AutoCompleteList.prototype.componentDidUpdate = function (prevProps) {
        if (!(0, lodash_isequal_1.default)(prevProps.items, this.props.items)) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                highlightedIndex: null,
            });
        }
    };
    AutoCompleteList.prototype.componentWillUnmount = function () {
        if (exenv_1.canUseEventListeners) {
            document.removeEventListener('keydown', this.handleKeydown);
        }
    };
    AutoCompleteList.prototype.render = function () {
        var _this = this;
        if (!this.props.visible || (0, lodash_isempty_1.default)(this.props.items)) {
            return null;
        }
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(itemsList_1.ItemsList, { className: (0, classcat_1.default)([(0, _utils_1.prefix)({ 'autoComplete-list': true }), this.props.className]), keyGenerator: function (index) { return _this.props.itemKey(_this.props.items[index]); }, role: "listbox", withSeparators: this.props.withSeparators }, this.props.items.slice(0, this.props.maxItems).map(function (item, index) {
                var status = _this.state.selectedIndex === index
                    ? _this.props.selectedItemStatus
                    : item_1.ItemStatus.DEFAULT;
                var isHighlighted = index === _this.state.highlightedIndex;
                var id = item.id, itemChoiceProps = __rest(item, ["id"]);
                return (react_1.default.createElement(itemChoice_1.ItemChoice, __assign({}, itemChoiceProps, { className: (0, classcat_1.default)([_this.props.itemClassName, { highlight: isHighlighted }]), status: status, onClick: function () {
                        _this.onSelect(index, item);
                    }, onDoneAnimationEnd: _this.props.onDoneAnimationEnd, key: _this.props.itemKey(item), tabIndex: -1 })));
            }))));
    };
    AutoCompleteList.defaultProps = {
        maxItems: Infinity,
        itemKey: function (_a) {
            var leftAddon = _a.leftAddon, item = __rest(_a, ["leftAddon"]);
            return JSON.stringify(item);
        },
        visible: false,
        withSeparators: true,
    };
    return AutoCompleteList;
}(react_1.Component));
exports.AutoCompleteList = AutoCompleteList;
