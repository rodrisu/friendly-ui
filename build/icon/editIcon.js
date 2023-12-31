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
exports.EditIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var EditIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.0678 2.12264C17.8726 1.92738 17.556 1.92738 17.3607 2.12264L3.07502 16.4084C3.00522 16.4782 2.95764 16.5671 2.93828 16.6639L1.9859 21.4258C1.95311 21.5897 2.00442 21.7592 2.12264 21.8774C2.24085 21.9956 2.41032 22.0469 2.57425 22.0141L7.33615 21.0617C7.43295 21.0424 7.52185 20.9948 7.59165 20.925L18.9969 9.51974C19.0055 9.51224 19.0139 9.5044 19.0221 9.49621C19.0303 9.48802 19.0381 9.47962 19.0456 9.47102L21.8774 6.63927C21.9711 6.54551 22.0238 6.41833 22.0238 6.28572C22.0238 6.15311 21.9711 6.02593 21.8774 5.93217L18.0678 2.12264ZM18.6677 8.43472L20.8167 6.28572L17.7143 3.1833L15.5653 5.3323L18.6677 8.43472ZM14.8582 6.03941L3.88917 17.0084L3.11357 20.8864L6.99159 20.1108L17.9606 9.14183L14.8582 6.03941Z", fill: props.isDisabled ? branding_1.color.gray : props.iconColor }))); };
exports.EditIcon = EditIcon;
exports.EditIcon.defaultProps = icon_1.BaseIconDefaultProps;
