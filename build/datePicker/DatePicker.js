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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = exports.DatePickerOrientation = void 0;
var react_1 = __importStar(require("react"));
var react_day_picker_1 = __importDefault(require("react-day-picker"));
var classcat_1 = __importDefault(require("classcat"));
var _utils_1 = require("../_utils");
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var arrowIcon_1 = require("../icon/arrowIcon");
var DatePicker_style_1 = require("./DatePicker.style");
var BASE_CLASSNAME = 'datepicker';
var defaultWeekdaysLong = [0, 1, 2, 3, 4, 5, 6].map(function (weekday) {
    return react_day_picker_1.default.LocaleUtils.formatWeekdayLong(weekday);
});
var defaultWeekdaysShort = [0, 1, 2, 3, 4, 5, 6].map(function (weekday) {
    return react_day_picker_1.default.LocaleUtils.formatWeekdayShort(weekday);
});
var defaultMonths = react_day_picker_1.default.LocaleUtils.getMonths();
var DatePickerOrientation;
(function (DatePickerOrientation) {
    DatePickerOrientation["HORIZONTAL"] = "horizontal";
    DatePickerOrientation["VERTICAL"] = "vertical";
})(DatePickerOrientation || (exports.DatePickerOrientation = DatePickerOrientation = {}));
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            date: _this.props.initialDate,
        };
        _this.dayPickerContainer = react_1.default.createRef();
        _this.formatMonthTitle = function (date) {
            var currentYear = "".concat(new Date().getFullYear());
            return "".concat(_this.props.months[date.getMonth()], " ").concat(date.getFullYear()).replace(currentYear, '');
        };
        _this.onDayClick = function (date, modifiers) {
            if (!modifiers.disabled) {
                _this.setState({ date: date });
                if (_this.props.onChange) {
                    var yearString = "".concat(date.getFullYear());
                    var monthString = "".concat(date.getMonth() + 1).padStart(2, '0');
                    var dayString = "".concat(date.getDate()).padStart(2, '0');
                    _this.props.onChange({
                        name: _this.props.name,
                        value: "".concat(yearString, "-").concat(monthString, "-").concat(dayString),
                    });
                }
            }
        };
        _this.renderNavbar = function (props) {
            if (_this.props.orientation === DatePickerOrientation.VERTICAL) {
                // re-order weekdays starting from given firstDayOfWeek
                var orderedWeekdays = __spreadArray(__spreadArray([], _this.props.weekdaysShort.slice(_this.props.firstDayOfWeek), true), _this.props.weekdaysShort.slice(0, _this.props.firstDayOfWeek), true);
                var style = { top: "".concat(_this.props.stickyPositionTop, "px") };
                return (react_1.default.createElement("div", { className: (0, classcat_1.default)((0, _utils_1.prefix)({ 'sticky-weekdays': true }, BASE_CLASSNAME)), style: style, "aria-hidden": "true" },
                    react_1.default.createElement("div", { className: (0, classcat_1.default)((0, _utils_1.prefix)({ 'sticky-weekdaysrow': true }, BASE_CLASSNAME)) }, orderedWeekdays.map(function (weekday) { return (react_1.default.createElement("div", { className: (0, classcat_1.default)((0, _utils_1.prefix)({ 'sticky-weekday': true }, BASE_CLASSNAME)), key: weekday }, weekday)); }))));
            }
            return (react_1.default.createElement("div", { className: props.className },
                props.showPreviousButton && (react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.TERTIARY, className: (0, _utils_1.prefix)({ 'previous-month': true }, BASE_CLASSNAME), onClick: function () { return props.onPreviousClick(); }, isBubble: true },
                    react_1.default.createElement(arrowIcon_1.ArrowIcon, { iconColor: branding_1.color.blue }))),
                props.showNextButton && (react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.TERTIARY, className: (0, _utils_1.prefix)({ 'next-month': true }, BASE_CLASSNAME), onClick: function () { return props.onNextClick(); }, isBubble: true },
                    react_1.default.createElement(arrowIcon_1.ArrowIcon, { right: true, iconColor: branding_1.color.blue })))));
        };
        _this.renderCaption = function (props) { return (react_1.default.createElement("div", { className: (0, classcat_1.default)([(0, _utils_1.prefix)({ 'month-caption': true }, BASE_CLASSNAME), 'DayPicker-Caption']) }, props.localeUtils.formatMonthTitle(props.date))); };
        _this.renderDay = function (day) { return react_1.default.createElement("span", null, day.getDate()); };
        _this.scrollToSelectedMonth = function () {
            var _a = _this.props, initialDate = _a.initialDate, initialMonth = _a.initialMonth;
            if (initialDate === null) {
                return;
            }
            // Get the number of months between initialMonth (first month) and initialDate (selected date)
            // This gives us the index to select the right month in '.DayPicker-Month' array
            var month = (initialDate.getFullYear() - initialMonth.getFullYear()) * 12 +
                initialDate.getMonth() -
                initialMonth.getMonth();
            var selectedMonth = _this.dayPickerContainer.current.querySelectorAll('.DayPicker-Month')[month];
            if (typeof selectedMonth === 'undefined') {
                return;
            }
            var top = selectedMonth.offsetTop + _this.props.stickyPositionTop;
            if (top > window.innerHeight + window.pageYOffset) {
                window.scrollTo(0, top);
            }
        };
        return _this;
    }
    DatePicker.prototype.componentDidMount = function () {
        this.scrollToSelectedMonth();
        if (this.dayPickerContainer.current && this.props.focus) {
            var datePickerFocusableElement = this.dayPickerContainer.current.querySelector('.DayPicker-wrapper');
            if (datePickerFocusableElement) {
                datePickerFocusableElement.focus();
            }
        }
    };
    DatePicker.prototype.componentDidUpdate = function () {
        this.scrollToSelectedMonth();
    };
    DatePicker.prototype.render = function () {
        var _a, _b;
        var _c = this.props, className = _c.className, numberOfMonths = _c.numberOfMonths, isOutsideRange = _c.isOutsideRange, orientation = _c.orientation, fromMonth = _c.fromMonth, toMonth = _c.toMonth, weekdaysShort = _c.weekdaysShort, weekdaysLong = _c.weekdaysLong, months = _c.months, firstDayOfWeek = _c.firstDayOfWeek, initialMonth = _c.initialMonth;
        var date = this.state.date;
        var layoutClassName = "months-grid-".concat(numberOfMonths);
        return (react_1.default.createElement(DatePicker_style_1.StyledDatePicker, { ref: this.dayPickerContainer, className: (0, classcat_1.default)([
                "kirk-".concat(BASE_CLASSNAME),
                className,
                (0, _utils_1.prefix)((_a = {}, _a[orientation] = true, _a), BASE_CLASSNAME),
                (0, _utils_1.prefix)((_b = {}, _b[layoutClassName] = true, _b), BASE_CLASSNAME),
            ]) },
            react_1.default.createElement(react_day_picker_1.default, { numberOfMonths: numberOfMonths, onDayClick: this.onDayClick, selectedDays: date, disabledDays: isOutsideRange, fromMonth: fromMonth, pagedNavigation: true, navbarElement: this.renderNavbar, captionElement: this.renderCaption, renderDay: this.renderDay, weekdaysShort: weekdaysShort, weekdaysLong: weekdaysLong, months: months, firstDayOfWeek: firstDayOfWeek, localeUtils: __assign(__assign({}, react_day_picker_1.default.LocaleUtils), { formatMonthTitle: this.formatMonthTitle }), initialMonth: initialMonth, toMonth: toMonth })));
    };
    DatePicker.defaultProps = {
        locale: 'en',
        weekdaysShort: defaultWeekdaysShort,
        weekdaysLong: defaultWeekdaysLong,
        months: defaultMonths,
        numberOfMonths: 2,
        initialDate: null,
        initialMonth: new Date(),
        isOutsideRange: function (day) { return react_day_picker_1.default.DateUtils.isDayBefore(day, new Date()); },
        orientation: DatePickerOrientation.HORIZONTAL,
        fromMonth: new Date(),
        toMonth: new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate()),
        firstDayOfWeek: 0,
        stickyPositionTop: 0,
        focus: false,
    };
    return DatePicker;
}(react_1.PureComponent));
exports.DatePicker = DatePicker;
