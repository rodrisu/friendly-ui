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
exports.TextField = exports.inputModes = exports.inputTypes = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var _utils_1 = require("../_utils");
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var crossIcon_1 = require("../icon/crossIcon");
var eyeIcon_1 = require("../icon/eyeIcon");
var TextField_style_1 = require("./TextField.style");
var inputTypes;
(function (inputTypes) {
    inputTypes["TEXT"] = "text";
    inputTypes["PASSWORD"] = "password";
    inputTypes["EMAIL"] = "email";
    inputTypes["NUMBER"] = "number";
    inputTypes["SEARCH"] = "search";
    inputTypes["TEL"] = "tel";
})(inputTypes || (exports.inputTypes = inputTypes = {}));
var inputModes;
(function (inputModes) {
    inputModes["NONE"] = "none";
    inputModes["TEXT"] = "text";
    inputModes["DECIMAL"] = "decimal";
    inputModes["NUMERIC"] = "numeric";
    inputModes["TEL"] = "tel";
    inputModes["SEARCH"] = "search";
    inputModes["EMAIL"] = "email";
    inputModes["URL"] = "url";
})(inputModes || (exports.inputModes = inputModes = {}));
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.defaultValue,
            defaultValue: _this.props.defaultValue,
            previousValue: '',
            showPassword: false,
            hasFocus: false,
        };
        _this.clearButton = null;
        _this.onTextFieldChange = function (event) {
            var value = _this.state.value;
            _this.setState({
                value: _this.props.format(event.target.value, value),
                previousValue: value,
            }, _this.onChange);
            if (event.currentTarget.value === '') {
                _this.props.onClear();
            }
        };
        _this.onChange = function () {
            _this.props.onChange({
                name: _this.props.name,
                value: _this.state.value,
            });
        };
        _this.onFocus = function (event) {
            _this.setState({
                hasFocus: true,
            });
            _this.props.onFocus(event);
        };
        _this.onBlur = function (event) {
            if (!event.relatedTarget || event.relatedTarget !== _this.clearButton) {
                _this.setState({
                    hasFocus: false,
                });
                _this.props.onBlur(event);
            }
        };
        _this.clearValue = function () {
            var value = _this.state.value;
            _this.setState({
                value: '',
                previousValue: value,
            }, function () {
                _this.input.focus();
                _this.onChange();
                _this.props.onClear();
            });
        };
        _this.toggleShowPassword = function () {
            _this.setState(function (_a) {
                var showPassword = _a.showPassword;
                _this.input.focus();
                return { showPassword: !showPassword };
            });
        };
        _this.ref = function (input) {
            _this.input = input;
            _this.props.inputRef(input);
        };
        _this.renderError = function () {
            var _a = _this.props, error = _a.error, errorClassName = _a.errorClassName;
            var className = (0, classcat_1.default)(['kirk-error-message', errorClassName]);
            return react_1.default.isValidElement(error) ? (react_1.default.cloneElement(error, { className: className })) : (react_1.default.createElement("span", { role: "alert", className: className }, error));
        };
        return _this;
    }
    TextField.prototype.componentDidMount = function () {
        if (this.input && this.props.focus) {
            this.input.focus();
        }
    };
    TextField.getDerivedStateFromProps = function (props, state) {
        if (props.defaultValue !== state.defaultValue) {
            return __assign(__assign({}, state), { value: props.defaultValue, defaultValue: props.defaultValue, previousValue: state.value });
        }
        return null;
    };
    TextField.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.focus && this.props.focus !== prevProps.focus) {
            this.input.focus();
        }
    };
    TextField.prototype.render = function () {
        var _this = this;
        var _a = this.props, addon = _a.addon, type = _a.type, placeholder = _a.placeholder, name = _a.name, id = _a.id, labelledBy = _a.labelledBy, label = _a.label, className = _a.className, error = _a.error, disabled = _a.disabled, readOnly = _a.readOnly, onFocus = _a.onFocus, onBlur = _a.onBlur, autoFocus = _a.autoFocus, required = _a.required, maxLength = _a.maxLength, autoCorrect = _a.autoCorrect, autoComplete = _a.autoComplete, title = _a.title, buttonTitle = _a.buttonTitle, format = _a.format, inputMode = _a.inputMode, pattern = _a.pattern, focusBorder = _a.focusBorder, loader = _a.loader, inputAttributes = _a.inputAttributes;
        var value = this.state.value ? format(this.state.value, this.state.previousValue) : '';
        var attrs = __assign(__assign({}, inputAttributes), { type: type, placeholder: placeholder, name: name, id: id, 'aria-labelledby': labelledBy, value: value, maxLength: maxLength, autoComplete: autoComplete, autoCorrect: autoCorrect, title: title, inputMode: inputMode, pattern: pattern, 
            // modifiers
            disabled: disabled, readOnly: readOnly, required: required, autoFocus: autoFocus, 
            // actions
            onFocus: onFocus, onBlur: onBlur, onChange: this.onTextFieldChange, ref: this.ref });
        if (error) {
            attrs['aria-invalid'] = 'true';
        }
        var iconProps = {
            iconColor: branding_1.color.lightMidnightGreen,
            size: '18',
        };
        if (type === inputTypes.NUMBER) {
            // Display numeric keyboard on iOS
            attrs.pattern = '[0-9]*';
            attrs.inputMode = inputModes.NUMERIC;
        }
        var buttonOnClick = type !== inputTypes.PASSWORD ? this.clearValue : this.toggleShowPassword;
        var shouldDisplayButton = !disabled && value;
        return (react_1.default.createElement(TextField_style_1.StyledTextField, { className: (0, classcat_1.default)(['kirk-textField', (0, _utils_1.prefix)({ error: !!error, disabled: disabled }), className]) },
            label && react_1.default.createElement("label", { htmlFor: id }, label),
            react_1.default.createElement("div", { className: (0, classcat_1.default)([
                    'kirk-textField-wrapper',
                    {
                        'kirk-textField-wrapper--hasFocus': focusBorder && this.state.hasFocus,
                    },
                ]) },
                addon,
                react_1.default.createElement("input", __assign({}, attrs, { onFocus: this.onFocus, onBlur: this.onBlur, type: type === inputTypes.PASSWORD && this.state.showPassword ? inputTypes.TEXT : type })),
                loader,
                !loader && shouldDisplayButton && (react_1.default.createElement(button_1.Button, { className: "kirk-textField-button", status: button_1.ButtonStatus.UNSTYLED, isBubble: true, onClick: buttonOnClick, tabIndex: -1, title: buttonTitle, "aria-hidden": (0, lodash_isempty_1.default)(buttonTitle), buttonRef: function (elem) {
                        _this.clearButton = elem;
                    } }, type === 'password' ? (react_1.default.createElement(eyeIcon_1.EyeIcon, __assign({}, iconProps, { off: this.state.showPassword }))) : (react_1.default.createElement(crossIcon_1.CrossIcon, __assign({}, iconProps)))))),
            Boolean(error) && this.renderError()));
    };
    TextField.defaultProps = {
        inputRef: function () { },
        onClear: function () { },
        onFocus: function () { },
        onBlur: function () { },
        type: inputTypes.TEXT,
        format: function (value) { return value; },
        focusBorder: true,
    };
    TextField.INPUT_TYPES = inputTypes;
    TextField.INPUT_MODES = inputModes;
    return TextField;
}(react_1.PureComponent));
exports.TextField = TextField;
