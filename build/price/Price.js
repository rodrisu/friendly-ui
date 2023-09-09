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
exports.Price = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var _utils_1 = require("../_utils");
var branding_1 = require("../_utils/branding");
var itinerary_1 = require("../itinerary");
var constants_1 = require("./constants");
var Price_style_1 = require("./Price.style");
var TextField_1 = require("../textField/TextField");
var PriceValueSize = (_a = {},
    _a[constants_1.PriceDisplay.SMALL] = (0, branding_1.pxToInteger)(branding_1.font.l.size),
    _a[constants_1.PriceDisplay.LARGE] = (0, branding_1.pxToInteger)(branding_1.font.xxl.size),
    _a);
// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
var defaultInteger = Math.pow(2, 53) - 1;
var isTouchScreen = (0, _utils_1.isTouchEventsAvailable)();
// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
// @ts-ignore
var ItineraryType = (react_1.default.createElement(itinerary_1.Itinerary, null)).type;
var Price = /** @class */ (function (_super) {
    __extends(Price, _super);
    function Price(props) {
        var _this = _super.call(this, props) || this;
        _this.filterValue = function (value, min, max) { return Math.max(min, Math.min(value, max)); };
        _this.state = {
            value: _this.filterValue(_this.props.value, _this.props.min, _this.props.max),
            isInputActive: false,
        };
        // Function to handle input value change
        _this.handleInputChange = function (event) {
            var newValue = Number(event.target.value);
            if (!isNaN(newValue)) {
                _this.update(newValue);
            }
        };
        // Function to handle input focus
        _this.handleInputFocus = function () {
            _this.setState({ isInputActive: true });
        };
        // Function to handle input blur
        _this.handleInputBlur = function () {
            _this.setState({ isInputActive: false });
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
    Price.prototype.componentDidMount = function () {
        this.handleFontSize();
        window.addEventListener('resize', this.handleFontSize.bind(this));
        if (this.containerRef.current && this.props.focus) {
            this.containerRef.current.focus();
        }
    };
    Price.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleFontSize);
    };
    Price.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.max !== this.props.max || prevProps.min !== this.props.min) {
            this.update(this.state.value);
        }
        if (prevProps.value !== this.props.value) {
            this.update(this.props.value);
        }
    };
    Price.prototype.update = function (newValue) {
        var value = this.filterValue(newValue, this.props.min, this.props.max);
        this.setState({ value: value });
        this.props.onChange({ name: this.props.name, value: value });
        this.handleFontSize();
    };
    Price.prototype.handleFontSize = function () {
        if (!this.valueElementRef.current || this.props.display === constants_1.PriceDisplay.SMALL) {
            return;
        }
        var _a = this.props, format = _a.format, display = _a.display;
        var value = this.state.value;
        // Compute available space without paddings
        var availableSpace = this.valueElementRef.current.offsetWidth - (0, branding_1.pxToInteger)(branding_1.space.l) * 2;
        var valueLength = String(format(value)).length;
        var optimalSize = Math.trunc(availableSpace / (valueLength * 0.5));
        var maxSize = PriceValueSize[display];
        this.setState({ fontSize: Math.min(optimalSize, maxSize) });
    };
    Price.prototype.createButtonListeners = function (callback) {
        return isTouchScreen
            ? { onTouchStart: this.handleButtonDown(callback), onTouchEnd: this.handleButtonUp(callback) }
            : {
                onMouseDown: this.handleButtonDown(callback),
                // Use onClick and not mouseDown so that the event is triggered
                // even when pressing ENTER and SPACEBAR
                onClick: this.handleButtonUp(callback),
            };
    };
    Price.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, leftAddon = _a.leftAddon, title = _a.title, increaseLabel = _a.increaseLabel, decreaseLabel = _a.decreaseLabel, format = _a.format, min = _a.min, max = _a.max, valueClassName = _a.valueClassName, display = _a.display, disabled = _a.disabled;
        var isMax = this.state.value >= max;
        var isMin = this.state.value <= min;
        var buttonSize = constants_1.PriceButtonSize[display];
        var hasLeftAddon = display === constants_1.PriceDisplay.SMALL && !(0, lodash_isempty_1.default)(leftAddon);
        var isLeftAddonItinerary = hasLeftAddon && leftAddon.type === ItineraryType;
        return (react_1.default.createElement(Price_style_1.StyledPrice, { valueColor: this.getValueColor(), className: (0, classcat_1.default)(['kirk-price', "kirk-price-".concat(display), className]) },
            hasLeftAddon && (react_1.default.createElement(Price_style_1.StyledAddon, { fixNormalization: isLeftAddonItinerary }, leftAddon)),
            react_1.default.createElement("div", { className: "kirk-price-content", ref: this.containerRef, "aria-label": title, tabIndex: -1 },
                react_1.default.createElement(TextField_1.TextField, { type: TextField_1.inputTypes.NUMBER, id: "id", name: "inputPrice", inputMode: TextField_1.inputModes.NUMERIC, pattern: "pattern", labelledBy: "aria label", disabled: false, readOnly: false, label: "", error: "", onChange: function (obj) { return _this.update(Number(obj.value)); }, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, className: 'kirk-price-input', focus: false, required: false, maxLength: 1000, autoComplete: "off", title: "price text", defaultValue: this.state.value.toString() }))));
    };
    Price.defaultProps = {
        value: 0,
        step: 1,
        max: defaultInteger,
        min: -defaultInteger,
        format: function (value) { return value; },
        onChange: function () { },
        display: constants_1.PriceDisplay.SMALL,
        focus: false,
    };
    return Price;
}(react_1.PureComponent));
exports.Price = Price;
