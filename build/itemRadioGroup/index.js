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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRadioGroup = void 0;
var react_1 = __importStar(require("react"));
var interfaces_1 = require("../_utils/interfaces");
var ItemRadio_1 = require("../itemRadio/ItemRadio");
var itemsList_1 = require("../itemsList");
var ItemRadioGroup = /** @class */ (function (_super) {
    __extends(ItemRadioGroup, _super);
    function ItemRadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value,
        };
        _this.onChange = function (_a) {
            var name = _a.name, value = _a.value;
            _this.props.onChange({ name: name, value: value });
            _this.setState({ value: value });
        };
        _this.onClick = function (_a) {
            var name = _a.name, value = _a.value;
            _this.props.onClick({ name: name, value: value });
        };
        return _this;
    }
    ItemRadioGroup.getDerivedStateFromProps = function (props, state) {
        if (props.value !== state.value) {
            return {
                value: props.value,
            };
        }
        return null;
    };
    ItemRadioGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, status = _a.status, name = _a.name, className = _a.className, withSeparators = _a.withSeparators, withChevrons = _a.withChevrons;
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        return (react_1.default.createElement(itemsList_1.ItemsList, __assign({ withSeparators: withSeparators, className: className }, a11yAttrs, { role: "radiogroup" }), children.map(function (item) {
            var itemProps = item.props;
            var checked = _this.state.value === itemProps.value;
            var props = {
                key: "".concat(name).concat(itemProps.value),
                name: name,
                onChange: _this.onChange,
                onClick: _this.onClick,
                checked: checked,
                status: checked ? status : ItemRadio_1.ItemRadioStatus.DEFAULT,
                disabled: status === ItemRadio_1.ItemRadioStatus.LOADING || itemProps.disabled,
                chevron: withChevrons,
            };
            return (0, react_1.cloneElement)(item, props);
        })));
    };
    ItemRadioGroup.defaultProps = {
        value: '',
        className: '',
        onChange: function () { },
        onClick: function () { },
        withSeparators: false,
        withChevrons: false,
    };
    return ItemRadioGroup;
}(react_1.PureComponent));
exports.ItemRadioGroup = ItemRadioGroup;
