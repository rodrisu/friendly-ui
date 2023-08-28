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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var _utils_1 = require("../_utils");
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var minusIcon_1 = require("../icon/minusIcon");
var plusIcon_1 = require("../icon/plusIcon");
var itinerary_1 = require("../itinerary");
var constants_1 = require("./constants");
var Stepper_style_1 = require("./Stepper.style");
var StepperValueSize = (_a = {},
    _a[constants_1.StepperDisplay.SMALL] = (0, branding_1.pxToInteger)(branding_1.font.l.size),
    _a[constants_1.StepperDisplay.LARGE] = (0, branding_1.pxToInteger)(branding_1.font.xxl.size),
    _a);
// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
var defaultInteger = Math.pow(2, 53) - 1;
var isTouchScreen = (0, _utils_1.isTouchEventsAvailable)();
// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
// @ts-ignore
var ItineraryType = (react_1.default.createElement(itinerary_1.Itinerary, null)).type;
var Stepper = /** @class */ (function (_super) {
    __extends(Stepper, _super);
    function Stepper(props) {
        var _this = _super.call(this, props) || this;
        _this.filterValue = function (value, min, max) { return Math.max(min, Math.min(value, max)); };
        _this.state = {
            value: _this.filterValue(_this.props.value, _this.props.min, _this.props.max),
        };
        _this.handleButtonDown = function (callback) { return function () {
            if (exenv_1.canUseDOM) {
                _this.buttonDownDelay = window.setTimeout(function () {
                    _this.whileButtonDown = window.setInterval(function () {
                        callback();
                        if (_this.state.value >= _this.props.max || _this.state.value <= _this.props.min) {
                            _this.clearButtonPressedTimers();
                        }
                    }, parseInt(branding_1.delay.interval.base, 10));
                }, parseInt(branding_1.delay.timeout.base, 10));
            }
        }; };
        _this.clearButtonPressedTimers = function () {
            clearTimeout(_this.buttonDownDelay);
            clearInterval(_this.whileButtonDown);
        };
        _this.handleButtonUp = function (callback) { return function () {
            callback();
            _this.clearButtonPressedTimers();
        }; };
        _this.increment = function () {
            var newValue = _this.state.value + _this.props.step;
            _this.update(newValue);
            if (_this.containerRef.current && newValue >= _this.props.max) {
                _this.containerRef.current.focus();
            }
        };
        _this.decrement = function () {
            var newValue = _this.state.value - _this.props.step;
            _this.update(newValue);
            if (_this.containerRef.current && newValue <= _this.props.min) {
                _this.containerRef.current.focus();
            }
        };
        _this.setMinimum = function () {
            _this.update(_this.props.min);
        };
        _this.setMaximum = function () {
            _this.update(_this.props.max);
        };
        _this.getValueColor = function () {
            var _a = _this.props, threshold = _a.threshold, max = _a.max;
            if (!threshold) {
                return branding_1.color.midnightGreen;
            }
            var medium = threshold.medium, high = threshold.high;
            var value = _this.state.value;
            if (value === max || value > high) {
                return branding_1.color.red;
            }
            if (value > medium) {
                return branding_1.color.orange;
            }
            return branding_1.color.green;
        };
        _this.valueElementRef = react_1.default.createRef();
        _this.containerRef = react_1.default.createRef();
        return _this;
    }
    Stepper.prototype.componentDidMount = function () {
        this.handleFontSize();
        window.addEventListener('resize', this.handleFontSize.bind(this));
        if (this.containerRef.current && this.props.focus) {
            this.containerRef.current.focus();
        }
    };
    Stepper.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleFontSize);
    };
    Stepper.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.max !== this.props.max || prevProps.min !== this.props.min) {
            this.update(this.state.value);
        }
        if (prevProps.value !== this.props.value) {
            this.update(this.props.value);
        }
    };
    Stepper.prototype.update = function (newValue) {
        var value = this.filterValue(newValue, this.props.min, this.props.max);
        this.setState({ value: value });
        this.props.onChange({ name: this.props.name, value: value });
        this.handleFontSize();
    };
    Stepper.prototype.handleFontSize = function () {
        if (!this.valueElementRef.current || this.props.display === constants_1.StepperDisplay.SMALL) {
            return;
        }
        var _a = this.props, format = _a.format, display = _a.display;
        var value = this.state.value;
        // Compute available space without paddings
        var availableSpace = this.valueElementRef.current.offsetWidth - (0, branding_1.pxToInteger)(branding_1.space.l) * 2;
        var valueLength = String(format(value)).length;
        var optimalSize = Math.trunc(availableSpace / (valueLength * 0.5));
        var maxSize = StepperValueSize[display];
        this.setState({ fontSize: Math.min(optimalSize, maxSize) });
    };
    Stepper.prototype.createButtonListeners = function (callback) {
        return isTouchScreen
            ? { onTouchStart: this.handleButtonDown(callback), onTouchEnd: this.handleButtonUp(callback) }
            : {
                onMouseDown: this.handleButtonDown(callback),
                // Use onClick and not mouseDown so that the event is triggered
                // even when pressing ENTER and SPACEBAR
                onClick: this.handleButtonUp(callback),
            };
    };
    Stepper.prototype.render = function () {
        var _a = this.props, className = _a.className, leftAddon = _a.leftAddon, title = _a.title, increaseLabel = _a.increaseLabel, decreaseLabel = _a.decreaseLabel, format = _a.format, min = _a.min, max = _a.max, valueClassName = _a.valueClassName, display = _a.display, disabled = _a.disabled;
        var isMax = this.state.value >= max;
        var isMin = this.state.value <= min;
        var buttonSize = constants_1.StepperButtonSize[display];
        var hasLeftAddon = display === constants_1.StepperDisplay.SMALL && !(0, lodash_isempty_1.default)(leftAddon);
        var isLeftAddonItinerary = hasLeftAddon && leftAddon.type === ItineraryType;
        return (react_1.default.createElement(Stepper_style_1.StyledStepper, { valueColor: this.getValueColor(), className: (0, classcat_1.default)(['kirk-stepper', "kirk-stepper-".concat(display), className]) },
            hasLeftAddon && (react_1.default.createElement(Stepper_style_1.StyledAddon, { fixNormalization: isLeftAddonItinerary }, leftAddon)),
            react_1.default.createElement("div", { className: "kirk-stepper-content", ref: this.containerRef, "aria-label": title, tabIndex: -1 },
                react_1.default.createElement(button_1.Button, __assign({ "aria-label": decreaseLabel, type: "button", className: "kirk-stepper-decrement", status: button_1.ButtonStatus.UNSTYLED, disabled: disabled || isMin, isBubble: true }, this.createButtonListeners(this.decrement)),
                    react_1.default.createElement(minusIcon_1.MinusIcon, { iconColor: branding_1.color.blue, size: buttonSize, isDisabled: disabled || isMin })),
                react_1.default.createElement("div", { "aria-live": "polite", className: (0, classcat_1.default)(['kirk-stepper-value', valueClassName]), style: { fontSize: "".concat(this.state.fontSize, "px") }, ref: this.valueElementRef }, format(this.state.value)),
                react_1.default.createElement(button_1.Button, __assign({ "aria-label": increaseLabel, type: "button", className: "kirk-stepper-increment", status: button_1.ButtonStatus.UNSTYLED, disabled: disabled || isMax, isBubble: true }, this.createButtonListeners(this.increment)),
                    react_1.default.createElement(plusIcon_1.PlusIcon, { iconColor: branding_1.color.blue, size: buttonSize, isDisabled: disabled || isMax })))));
    };
    Stepper.defaultProps = {
        value: 0,
        step: 1,
        max: defaultInteger,
        min: -defaultInteger,
        format: function (value) { return value; },
        onChange: function () { },
        display: constants_1.StepperDisplay.SMALL,
        focus: false,
    };
    return Stepper;
}(react_1.PureComponent));
exports.Stepper = Stepper;
