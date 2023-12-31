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
exports.QuietIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var QuietIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M15.082 3.407l.007.083v3.404c0 .27-.223.49-.497.49a.495.495 0 01-.489-.402l-.008-.088V4.468l-6.117 4.52a.5.5 0 01-.218.091l-.08.006H2.993v5.829H7.68c.081 0 .16.02.23.056l.068.042 6.116 4.52.001-2.426c0-.24.176-.44.407-.482l.09-.007c.244 0 .446.173.489.4l.008.089v3.404c0 .374-.403.6-.723.436l-.072-.045-6.78-5.008H2.497a.495.495 0 01-.489-.401L2 15.404V8.596c0-.24.176-.44.407-.481l.09-.008h5.017l6.78-5.008a.499.499 0 01.788.308zm2.966 4.7C20.23 8.107 22 9.85 22 12c0 2.15-1.77 3.893-3.952 3.893-2.183 0-3.953-1.743-3.953-3.893 0-2.15 1.77-3.893 3.953-3.893zm-2.415 2.207A2.872 2.872 0 0015.09 12c0 1.61 1.324 2.915 2.959 2.915.638 0 1.229-.2 1.712-.538zm2.415-1.229c-.639 0-1.23.2-1.713.538l4.127 4.063A2.872 2.872 0 0021.006 12c0-1.61-1.324-2.915-2.958-2.915z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.QuietIcon = QuietIcon;
exports.QuietIcon.defaultProps = status_1.StatusIcon.defaultProps;
