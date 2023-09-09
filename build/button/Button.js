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
exports.Button = exports.eventHandler = exports.ButtonStatus = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var _utils_1 = require("../_utils");
var interfaces_1 = require("../_utils/interfaces");
var loader_1 = require("../loader");
var ButtonStatus;
(function (ButtonStatus) {
    ButtonStatus["PRIMARY"] = "primary";
    ButtonStatus["SECONDARY"] = "secondary";
    ButtonStatus["TERTIARY"] = "tertiary";
    ButtonStatus["WARNING"] = "warning";
    ButtonStatus["FACEBOOK"] = "facebook";
    ButtonStatus["VKONTAKTE"] = "vkontakte";
    ButtonStatus["UNSTYLED"] = "unstyled";
    ButtonStatus["LOADING"] = "loading";
    ButtonStatus["CHECKED"] = "checked";
    ButtonStatus["GREEN"] = "green";
})(ButtonStatus || (exports.ButtonStatus = ButtonStatus = {}));
var eventHandler = function (componentEvent, childEvent) { return function (event) {
    // eslint-disable-next-line no-unused-expressions
    componentEvent && componentEvent(event);
    // eslint-disable-next-line no-unused-expressions
    childEvent && childEvent(event);
}; };
exports.eventHandler = eventHandler;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = function (button) {
            _this.button = button;
            _this.props.buttonRef(button);
        };
        return _this;
    }
    Button.prototype.componentDidMount = function () {
        if (this.props.focus) {
            this.button.focus();
        }
    };
    Button.prototype.componentDidUpdate = function (prevProps) {
        var focusChanged = prevProps.focus !== this.props.focus;
        if (focusChanged && this.props.focus) {
            this.button.focus();
        }
    };
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, className = _b.className, type = _b.type, href = _b.href, title = _b.title, index = _b.index, 
        // Modifiers
        status = _b.status, isBubble = _b.isBubble, shadowed = _b.shadowed, 
        // Actions
        onClick = _b.onClick, onTouchStart = _b.onTouchStart, onTouchEnd = _b.onTouchEnd, onMouseDown = _b.onMouseDown, onMouseUp = _b.onMouseUp, onBlur = _b.onBlur, onFocus = _b.onFocus, onDoneAnimationEnd = _b.onDoneAnimationEnd, focus = _b.focus, disabled = _b.disabled, buttonRef = _b.buttonRef, 
        // Extend case of the button for the expand component
        attrs = __rest(_b, ["children", "className", "type", "href", "title", "index", "status", "isBubble", "shadowed", "onClick", "onTouchStart", "onTouchEnd", "onMouseDown", "onMouseUp", "onBlur", "onFocus", "onDoneAnimationEnd", "focus", "disabled", "buttonRef"]);
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        var componentType;
        var typeProps = {};
        // If we pass a component to href, we get component type and we merge props
        if (typeof href !== 'string') {
            componentType = href.type;
            typeProps = __assign({}, href.props);
        }
        else if (!(0, lodash_isempty_1.default)(href)) {
            componentType = 'a';
            typeProps = { href: href };
        }
        else {
            componentType = 'button';
            typeProps = { type: type };
        }
        var hasLoader = status === ButtonStatus.LOADING || status === ButtonStatus.CHECKED;
        typeProps.ref = this.ref;
        typeProps.title = title;
        typeProps.index = index;
        typeProps.onClick = (0, exports.eventHandler)(onClick, typeProps.onClick);
        typeProps.onMouseDown = (0, exports.eventHandler)(onMouseDown, typeProps.onMouseDown);
        typeProps.onMouseUp = (0, exports.eventHandler)(onMouseUp, typeProps.onMouseUp);
        typeProps.onTouchStart = (0, exports.eventHandler)(onTouchStart, typeProps.onTouchStart);
        typeProps.onTouchEnd = (0, exports.eventHandler)(onTouchEnd, typeProps.onTouchEnd);
        typeProps.onFocus = (0, exports.eventHandler)(onFocus, typeProps.onFocus);
        typeProps.onBlur = (0, exports.eventHandler)(onBlur, typeProps.onBlur);
        typeProps.disabled = hasLoader || disabled;
        var props = __assign(__assign(__assign({ className: (0, classcat_1.default)([
                (0, _utils_1.prefix)({ button: true }),
                (0, _utils_1.prefix)((_a = {},
                    _a[status] = status,
                    _a.bubble = isBubble || hasLoader,
                    _a.shadowed = shadowed,
                    _a), 'button'),
                className,
            ]) }, typeProps), attrs), a11yAttrs);
        return react_1.default.createElement(componentType, props, react_1.default.createElement(react_1.Fragment, null,
            hasLoader && (react_1.default.createElement(loader_1.Loader, { size: 48, inline: true, done: status === ButtonStatus.CHECKED, onDoneAnimationEnd: onDoneAnimationEnd })),
            !hasLoader && children));
    };
    Button.defaultProps = {
        type: 'button',
        href: '',
        children: '',
        className: '',
        status: ButtonStatus.PRIMARY,
        isBubble: false,
        shadowed: false,
        focus: false,
        disabled: false,
        buttonRef: function () { },
    };
    return Button;
}(react_1.PureComponent));
exports.Button = Button;
