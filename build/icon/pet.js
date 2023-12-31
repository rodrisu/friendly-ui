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
exports.PetIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var PetIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M7.036 7.486L6.541 5.82a2.24 2.24 0 114.292-1.276l.496 1.667a2.24 2.24 0 01-4.293 1.276zm3.334-.991l-.495-1.667a1.24 1.24 0 10-2.376.706l.496 1.667a1.24 1.24 0 002.375-.706zm5.635.706l.496-1.667a1.24 1.24 0 10-2.376-.706l-.495 1.667a1.24 1.24 0 002.375.706zm-3.334-.991l.496-1.667a2.24 2.24 0 114.292 1.276l-.495 1.667A2.24 2.24 0 0112.67 6.21zm-9.833 6.26l-.366-.428a2.24 2.24 0 013.404-2.91l.366.43a2.24 2.24 0 01-3.404 2.909zm2.644-2.259l-.366-.428a1.24 1.24 0 00-1.884 1.61l.366.428a1.24 1.24 0 101.884-1.61zm14.92 1.61l.366-.429a1.24 1.24 0 00-1.884-1.61l-.366.43a1.24 1.24 0 001.884 1.609zm-2.644-2.26l.366-.428a2.24 2.24 0 013.404 2.909l-.366.429a2.24 2.24 0 01-3.404-2.91zm-9.915 3.992l.02-.03c1.993-2.813 6.28-2.813 8.294.03l1.725 2.846c1.689 2.787-1.191 6.058-4.284 4.91l-.15-.056a4.172 4.172 0 00-2.896 0l-.15.056c-3.093 1.148-5.973-2.123-4.284-4.91l1.725-2.846zm-.87 3.364c-1.186 1.959.857 4.28 3.081 3.454l.15-.055a5.172 5.172 0 013.592 0l.15.055c2.224.826 4.267-1.495 3.08-3.454L15.323 14.1c-1.592-2.246-5.034-2.25-6.634-.014l-1.715 2.83z" }))); };
exports.PetIcon = PetIcon;
exports.PetIcon.defaultProps = status_1.StatusIcon.defaultProps;
