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
exports.ConnectionIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var ConnectionIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.48 12.858C14.2957 12.6537 13.9846 12.641 13.785 12.8296C13.6076 12.9972 13.578 13.2675 13.7031 13.4689L13.7572 13.5409L14.7071 14.5941L8.67098 14.5945C8.39935 14.5945 8.17916 14.8199 8.17916 15.0979C8.17916 15.3451 8.35314 15.5506 8.58257 15.5933L8.67098 15.6014L14.7061 15.601L13.7572 16.6551C13.5934 16.8367 13.5851 17.1085 13.7254 17.2992L13.785 17.3665C13.9624 17.5341 14.228 17.5427 14.4142 17.399L14.48 17.338L16.5 15.098L14.48 12.858ZM10.2969 7.2729C10.422 7.07142 10.3924 6.80114 10.215 6.63351C10.0154 6.44492 9.70425 6.45766 9.52001 6.66197L7.5 8.90198L9.52001 11.142L9.5858 11.203C9.77202 11.3466 10.0376 11.3381 10.215 11.1704L10.2746 11.1031C10.4149 10.9125 10.4066 10.6407 10.2428 10.4591L9.29218 9.40478L15.3294 9.40532L15.4178 9.39721C15.6473 9.35458 15.8212 9.14904 15.8212 8.90189C15.8212 8.62386 15.601 8.39847 15.3294 8.39847L9.2912 8.39793L10.2428 7.3449L10.2969 7.2729Z", fill: branding_1.color.lightMidnightGreen }))); };
exports.ConnectionIcon = ConnectionIcon;
exports.ConnectionIcon.defaultProps = icon_1.BaseIconDefaultProps;
