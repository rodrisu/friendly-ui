"use strict";
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
exports.DatePickerOverlay = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var item_1 = require("../../../_internals/item");
var datePicker_1 = require("../../../datePicker");
var contentDivider_1 = require("../../../divider/contentDivider");
var calendarIcon_1 = require("../../../icon/calendarIcon");
var NUMBER_OF_MONTHS = 1;
var DatePickerOverlay = function (_a) {
    var title = _a.title, renderDatePickerComponent = _a.renderDatePickerComponent, className = _a.className, props = __rest(_a, ["title", "renderDatePickerComponent", "className"]);
    return (react_1.default.createElement("div", { className: (0, classcat_1.default)(['kirk-datePickerOverlay', className]) },
        react_1.default.createElement(item_1.Item, { leftAddon: react_1.default.createElement(calendarIcon_1.CalendarIcon, null), leftTitle: title }),
        react_1.default.createElement(contentDivider_1.ContentDivider, null),
        renderDatePickerComponent(__assign(__assign({}, props), { numberOfMonths: NUMBER_OF_MONTHS, className: 'kirk-datePickerOverlay-datepicker', orientation: datePicker_1.DatePickerOrientation.HORIZONTAL, focus: true }))));
};
exports.DatePickerOverlay = DatePickerOverlay;
