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
exports.Textarea = void 0;
/* TODO: BBC-7420 fix a11y issues */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var _utils_1 = require("../_utils");
var button_1 = require("../button");
var Textarea_style_1 = require("./Textarea.style");
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.defaultValue,
            defaultValue: _this.props.defaultValue,
            hasFocus: false,
        };
        _this.buttonRef = null;
        _this.textareaRef = react_1.default.createRef();
        // To ensure a proper scrolling behavior for the textarea when growing with content, we need to
        // have a wrapper independent from the native textarea. This wrapper is bigger that the
        // the textarea but still looks like the textarea (same background color). When activating the
        // wrapper, the focus should set the focus on the native textarea.
        _this.onWrapperClick = function () {
            if (_this.textareaRef && _this.textareaRef.current) {
                _this.textareaRef.current.focus();
            }
        };
        _this.onFocus = function (event) {
            _this.setState({
                hasFocus: true,
            });
            _this.props.onFocus(event);
        };
        _this.onBlur = function (event) {
            if (!event.relatedTarget || event.relatedTarget !== _this.buttonRef) {
                _this.setState({
                    hasFocus: false,
                });
                _this.props.onBlur(event);
            }
        };
        _this.onTextAreaChange = function (event) {
            _this.setState({
                value: event.target.value,
            }, _this.onChange);
        };
        _this.maybeAdaptHeightToContent = function () {
            if (!_this.props.fitContent) {
                return;
            }
            // Fit height to content.
            if (_this.textareaRef && _this.textareaRef.current) {
                _this.textareaRef.current.style.height = '0';
                _this.textareaRef.current.style.height = "".concat(_this.textareaRef.current.scrollHeight, "px");
            }
        };
        _this.onChange = function () {
            _this.props.onChange({
                name: _this.props.name,
                value: _this.state.value,
            });
            _this.maybeAdaptHeightToContent();
        };
        _this.ref = function (textarea) {
            _this.props.fieldRef(textarea);
        };
        _this.renderError = function () {
            var _a = _this.props, error = _a.error, errorClassName = _a.errorClassName;
            var className = (0, classcat_1.default)(['kirk-error-message', errorClassName]);
            return react_1.default.isValidElement(error) ? (react_1.default.cloneElement(error, { className: className })) : (react_1.default.createElement("span", { role: "alert", className: className }, error));
        };
        return _this;
    }
    Textarea.prototype.componentDidMount = function () {
        if (this.textareaRef && this.textareaRef.current && this.props.focus) {
            this.textareaRef.current.focus();
        }
    };
    Textarea.getDerivedStateFromProps = function (props, state) {
        if (props.defaultValue !== state.defaultValue) {
            return __assign(__assign({}, state), { value: props.defaultValue, defaultValue: props.defaultValue });
        }
        return null;
    };
    Textarea.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.focus &&
            this.props.focus !== prevProps.focus &&
            this.textareaRef &&
            this.textareaRef.current) {
            this.textareaRef.current.focus();
        }
        this.maybeAdaptHeightToContent();
    };
    Textarea.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, placeholder = _a.placeholder, name = _a.name, id = _a.id, labelledBy = _a.labelledBy, label = _a.label, error = _a.error, disabled = _a.disabled, readOnly = _a.readOnly, onFocus = _a.onFocus, onBlur = _a.onBlur, autoFocus = _a.autoFocus, required = _a.required, maxLength = _a.maxLength, autoCorrect = _a.autoCorrect, autoComplete = _a.autoComplete, title = _a.title, buttonTitle = _a.buttonTitle, focusBorder = _a.focusBorder, buttonIcon = _a.buttonIcon, onButtonClick = _a.onButtonClick, fitContent = _a.fitContent;
        var value = this.state.value || '';
        var attributes = {
            placeholder: placeholder,
            className: '',
            name: name,
            id: id,
            'aria-labelledby': labelledBy,
            value: value,
            maxLength: maxLength,
            autoComplete: autoComplete,
            autoCorrect: autoCorrect,
            title: title,
            // modifiers
            disabled: disabled,
            readOnly: readOnly,
            required: required,
            autoFocus: autoFocus,
            // actions
            onFocus: onFocus,
            onBlur: onBlur,
            onChange: this.onTextAreaChange,
            ref: this.ref,
        };
        if (error) {
            attributes['aria-invalid'] = 'true';
        }
        var textareaFieldClassNames = ['kirk-textarea-element'];
        var shouldDisplayButton = buttonIcon && onButtonClick && !(0, lodash_isempty_1.default)(buttonTitle);
        if (shouldDisplayButton) {
            textareaFieldClassNames.push('kirk-textarea-hasButton');
        }
        if (fitContent) {
            textareaFieldClassNames.push('kirk-textarea-fitContent');
        }
        attributes.className = (0, classcat_1.default)(textareaFieldClassNames);
        return (react_1.default.createElement(Textarea_style_1.StyledTextarea, { className: (0, classcat_1.default)(['kirk-textarea', (0, _utils_1.prefix)({ error: !!error, disabled: disabled }), className]) },
            label && react_1.default.createElement("label", { htmlFor: id }, label),
            react_1.default.createElement("div", { onClick: this.onWrapperClick, className: (0, classcat_1.default)([
                    'kirk-textarea-wrapper',
                    {
                        'kirk-textarea-wrapper--hasFocus': focusBorder && this.state.hasFocus,
                    },
                ]) },
                react_1.default.createElement("textarea", __assign({}, attributes, { ref: this.textareaRef, onFocus: this.onFocus, onBlur: this.onBlur })),
                shouldDisplayButton && (react_1.default.createElement(button_1.Button, { className: "kirk-textarea-button", status: button_1.ButtonStatus.UNSTYLED, isBubble: true, onClick: onButtonClick, tabIndex: 0, title: buttonTitle, buttonRef: function (elem) {
                        _this.buttonRef = elem;
                    } }, buttonIcon))),
            Boolean(error) && this.renderError()));
    };
    Textarea.defaultProps = {
        fieldRef: function () { },
        onFocus: function () { },
        onBlur: function () { },
        focusBorder: true,
    };
    return Textarea;
}(react_1.PureComponent));
exports.Textarea = Textarea;
