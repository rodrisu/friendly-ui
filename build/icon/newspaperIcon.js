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
exports.NewspaperIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var NewspaperIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M23.5,1h-18C5.224,1,5,1.224,5,1.5V13H1.5C1.224,13,1,13.224,1,13.5v8C1,22.879,2.122,24,3.5,24h18 c1.379,0,2.5-1.121,2.5-2.5v-20C24,1.224,23.776,1,23.5,1z M3.5,23C2.673,23,2,22.327,2,21.5V14h3v7.5C5,22.327,4.327,23,3.5,23z M23,21.5c0,0.827-0.673,1.5-1.5,1.5H5.499C5.813,22.582,6,22.062,6,21.5V2h17V21.5z" }),
        react_1.default.createElement("path", { d: "M17.5,7h2C19.776,7,20,6.776,20,6.5S19.776,6,19.5,6h-2C17.224,6,17,6.224,17,6.5S17.224,7,17.5,7z" }),
        react_1.default.createElement("path", { d: "M17.5,11h2c0.276,0,0.5-0.224,0.5-0.5S19.776,10,19.5,10h-2c-0.276,0-0.5,0.224-0.5,0.5S17.224,11,17.5,11z " }),
        react_1.default.createElement("path", { d: "M9.5,15h10c0.276,0,0.5-0.224,0.5-0.5S19.776,14,19.5,14h-10C9.224,14,9,14.224,9,14.5S9.224,15,9.5,15z" }),
        react_1.default.createElement("path", { d: "M9.5,11h4c0.276,0,0.5-0.224,0.5-0.5v-4C14,6.224,13.776,6,13.5,6h-4C9.224,6,9,6.224,9,6.5v4 C9,10.776,9.224,11,9.5,11z M10,7h3v3h-3V7z" }),
        react_1.default.createElement("path", { d: "M9.5,19h10c0.276,0,0.5-0.224,0.5-0.5S19.776,18,19.5,18h-10C9.224,18,9,18.224,9,18.5S9.224,19,9.5,19z" })))); };
exports.NewspaperIcon = NewspaperIcon;
exports.NewspaperIcon.defaultProps = icon_1.BaseIconDefaultProps;
