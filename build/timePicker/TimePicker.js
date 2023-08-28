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
exports.TimePicker = exports.getTodayDate = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var _utils_1 = require("../_utils");
var TimePicker_style_1 = require("./TimePicker.style");
/**
 * Format given dateTime in the format HH:MM.
 */
var formatTimeValue = function (dateTime) {
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    return "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
};
/**
 * Returns a date with the time set to 00:00:00
 * e.g. input: Fri Jul 27 2018 10:03:29 GMT-0300 -> Fri Jul 27 2018 00:00:00 GMT-0300
 * @return date Date object
 *
 */
var getTodayDate = function () {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
};
exports.getTodayDate = getTodayDate;
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Returns a map of `{timeValue: timeLabel}` used to build the select options.
         * E.g. `{ '00:00': '12:00 AM', '08:00': '8:00 AM', '16:00': '4:00 PM' }`.
         */
        _this.generateTimeSteps = function (_a) {
            var _b = _a.minuteStep, minuteStep = _b === void 0 ? 30 : _b, _c = _a.timeStart, timeStart = _c === void 0 ? '00:00' : _c;
            var steps = {};
            // Taking today as reference to loop through hours
            var dt = _this.referenceDate;
            var day = _this.referenceDate.getDate();
            var renderTime = _this.props.renderTime;
            while (dt.getDate() === day) {
                if (formatTimeValue(dt) >= timeStart) {
                    steps[formatTimeValue(dt)] = renderTime(dt);
                }
                dt.setMinutes(dt.getMinutes() + minuteStep);
            }
            return steps;
        };
        _this.referenceDate = (0, exports.getTodayDate)();
        _this.state = {
            value: _this.getDefaultValue(),
            steps: _this.generateTimeSteps(_this.props),
            isFocused: false,
        };
        _this.selectRef = react_1.default.createRef();
        _this.onChange = function (e) {
            var name = _this.props.name;
            var value = e.target.value;
            _this.setState({ value: value });
            _this.props.onChange({ name: name, value: value });
        };
        _this.onSelectFocus = function () { return _this.setState({ isFocused: true }); };
        _this.onSelectBlur = function () { return _this.setState({ isFocused: false }); };
        return _this;
    }
    TimePicker.getDerivedStateFromProps = function (props, state) {
        if (state.value < props.timeStart) {
            return __assign(__assign({}, state), { value: props.timeStart });
        }
        return null;
    };
    TimePicker.prototype.componentDidMount = function () {
        if (this.selectRef && this.props.focus) {
            this.selectRef.current.focus();
        }
    };
    TimePicker.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.focus && this.props.focus !== prevProps.focus) {
            this.selectRef.current.focus();
        }
    };
    TimePicker.prototype.getDefaultValue = function () {
        if (!this.props.defaultValue) {
            return formatTimeValue(this.referenceDate);
        }
        return this.props.defaultValue;
    };
    TimePicker.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, name = _a.name;
        var steps = this.state.steps;
        return (react_1.default.createElement(TimePicker_style_1.StyledTimePickerWrapper, { className: (0, classcat_1.default)([(0, _utils_1.prefix)({ timePicker: true }), { focus: this.state.isFocused }, className]) },
            react_1.default.createElement(TimePicker_style_1.StyledTimePicker, { "aria-disabled": disabled },
                react_1.default.createElement("time", null, steps[this.state.value]),
                react_1.default.createElement("select", { name: name, value: this.state.value, disabled: disabled, onChange: this.onChange, onFocus: this.onSelectFocus, onBlur: this.onSelectBlur, ref: this.selectRef }, Object.keys(steps).map(function (key) { return (react_1.default.createElement("option", { key: key, value: key }, steps[key])); })))));
    };
    TimePicker.defaultProps = {
        renderTime: formatTimeValue,
    };
    return TimePicker;
}(react_1.PureComponent));
exports.TimePicker = TimePicker;
