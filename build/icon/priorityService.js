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
exports.PriorityServiceIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var PriorityServiceIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M15.985 2.154c1.46 0 2.644 1.198 2.644 2.676 0 1.478-1.184 2.676-2.644 2.676h.004l-.327 1.407 3.368 2.556 2.261-.761c.251-.085.52.028.642.254l.04.09a.548.548 0 01-.252.65l-.09.04-2.527.852a.533.533 0 01-.404-.026l-.09-.055-3.217-2.442-2.676 11.509a.538.538 0 01-1.062-.152l.014-.098 3.265-14.043A2.678 2.678 0 0113.34 4.83c0-1.478 1.184-2.676 2.645-2.676zm-3.31 7.122a.549.549 0 01-.159.679l-.082.051-1.486.75-.772 2.346-2.528 7.673a.538.538 0 01-.586.367l-.095-.023-3.362-1.134a.545.545 0 01-.363-.593l.023-.096 1.685-5.115a.538.538 0 01.586-.367l.095.023 2.85.961.674-2.04.842-2.558a.544.544 0 01.197-.271l.073-.044 1.685-.853a.535.535 0 01.723.244zm4.037 4.91l.075.063 1.685 1.706c.08.081.133.186.15.299l.007.086v4.263c0 .3-.24.544-.538.544a.54.54 0 01-.53-.446l-.008-.098v-4.039l-1.528-1.544a.55.55 0 01-.062-.695l.062-.076a.534.534 0 01.687-.063zm-10.911.855l-1.345 4.082 2.34.79 1.345-4.082-2.34-.79zM2.825 2.083l.077.06 3.23 2.996a.55.55 0 01.069.726l-.069.077-3.23 2.996a.534.534 0 01-.76-.034.55.55 0 01-.033-.697l.066-.072L4.972 5.54 2.175 2.946a.55.55 0 01-.092-.691l.058-.078a.534.534 0 01.684-.094zm3.23 0l.077.06 3.23 2.996a.55.55 0 01.069.726l-.069.077-3.23 2.996a.534.534 0 01-.76-.034.55.55 0 01-.033-.697l.066-.072L8.2 5.54 5.405 2.946a.55.55 0 01-.093-.691l.06-.078a.534.534 0 01.683-.094zm9.93 1.16c-.866 0-1.568.71-1.568 1.587 0 .876.702 1.587 1.568 1.587.866 0 1.568-.71 1.568-1.587 0-.876-.702-1.587-1.568-1.587z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.PriorityServiceIcon = PriorityServiceIcon;
exports.PriorityServiceIcon.defaultProps = status_1.StatusIcon.defaultProps;
