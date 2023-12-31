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
exports.LegRestIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var LegRestIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M8.48 2.918c.714 1.406 1.06 2.963 1.144 5.095l.025.715a41.67 41.67 0 01-.052 3.707l-.047.822-.037.547h4.59v.002l3.315 2.62a211.29 211.29 0 013.018 2.436l.14.115.089.099c.374.56.445 1.403.162 2.034-.33.739-1.054 1.057-1.968.804l-.163-.05-.121-.064-.77-.58c-.321-.242-.595-.446-.912-.678l-.62-.448c-.581-.417-1.25-.885-2.047-1.431l-.397-.272H8.652l-2.203-.004a1.712 1.712 0 01-1.393-.92 1.638 1.638 0 01-.144-.426l-.027-.146-.85-12.487c-.174-.864.31-1.717 1.107-1.986l.129-.037 1.36-.338c.737-.182 1.498.177 1.85.87zm-1.537.02l-.1.018-1.361.337c-.365.091-.606.447-.568.878l.015.11.852 12.498c.022.123.043.19.077.257a.807.807 0 00.531.404l.093.014 2.17.003h5.45l1.204.826c.647.449 1.205.842 1.7 1.2l.72.524 1.316.989.066.02c.448.125.714.03.861-.225l.037-.073c.132-.294.114-.716-.027-1.008l-.032-.057-1.118-.915a323.272 323.272 0 00-2.407-1.925l-2.63-2.075H8.546l.101-1.542.05-.864c.085-1.627.087-2.71.024-4.28-.08-2.004-.396-3.428-1.041-4.7a.744.744 0 00-.737-.414z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.LegRestIcon = LegRestIcon;
exports.LegRestIcon.defaultProps = status_1.StatusIcon.defaultProps;
