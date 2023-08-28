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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownButton = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../../_utils/branding");
var interfaces_1 = require("../../_utils/interfaces");
var chevronIcon_1 = require("../../icon/chevronIcon");
var DropdownButton_style_1 = require("./DropdownButton.style");
var DropdownButton = function (props) {
    var _a = props.open, open = _a === void 0 ? false : _a, children = props.children, onClick = props.onClick, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.iconPosition, iconPosition = _c === void 0 ? 'right' : _c;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(DropdownButton_style_1.StyledDropdownButton, { className: (0, classcat_1.default)([
            'kirk-dropdownButton',
            {
                'kirk-dropdownButton--open': open,
            },
            className,
        ]) },
        react_1.default.createElement("button", __assign({}, a11yAttrs, { "aria-expanded": open, type: "button", onClick: onClick }),
            iconPosition === 'left' && (react_1.default.createElement(chevronIcon_1.ChevronIcon, { iconColor: branding_1.color.lightMidnightGreen, direction: chevronIcon_1.ChevronIconDirections.DOWN })),
            children,
            iconPosition === 'right' && (react_1.default.createElement(chevronIcon_1.ChevronIcon, { iconColor: branding_1.color.lightMidnightGreen, direction: chevronIcon_1.ChevronIconDirections.DOWN })))));
};
exports.DropdownButton = DropdownButton;
