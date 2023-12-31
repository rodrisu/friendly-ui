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
exports.LegRoomIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var LegRoomIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M4.526 3.037a1.327 1.327 0 011.485.677c.76 1.449 1.118 3.053 1.208 5.242.079 1.902.07 3.163-.082 5.559l-.076 1.12h5.609c.692 0 1.26.531 1.324 1.21l.006.129v2.686c0 .739-.594 1.34-1.33 1.34H6.644l-2.4-.004c-.464-.033-.916-.3-1.133-.716a1.376 1.376 0 01-.133-.417l-.95-14.887a1.34 1.34 0 01.994-1.578zM4.832 4l-.072.009-1.505.361c-.174.042-.285.22-.238.472l.95 14.888a.346.346 0 00.03.089c.053.1.213.185.401.181h8.272c.181 0 .33-.151.33-.34v-2.686c0-.19-.149-.34-.33-.34H5.987l.145-2.07c.157-2.434.166-3.672.088-5.566l-.02-.403c-.11-1.845-.437-3.2-1.074-4.416a.327.327 0 00-.366-.17zm7.322 8.386l-.051-.063.015.021-.002-.003-.013-.018-.02-.03a.558.558 0 01-.083-.277v-.028l.002-.032.002-.02-.003.051.003-.053.01-.059a.602.602 0 01.08-.185l.01-.016a.544.544 0 01.039-.048l.011-.012 2.369-2.454a.513.513 0 01.744 0 .56.56 0 01.06.696l-.06.075-1.47 1.523h6.406l-1.47-1.523a.56.56 0 01-.06-.696l.06-.075a.513.513 0 01.672-.063l.072.063 2.369 2.454.053.066.018.026A.558.558 0 0122 12l-.001.015v.008l-.001.025-.002.014v.012l-.001-.008-.008.057a.597.597 0 01-.08.187l-.01.014a.544.544 0 01-.04.05l-.011.012-2.369 2.454a.513.513 0 01-.744 0 .56.56 0 01-.06-.696l.06-.075 1.469-1.524h-6.406l1.47 1.524a.56.56 0 01.062.696l-.061.075a.513.513 0 01-.672.063l-.072-.063-2.369-2.454-.011-.013-.021-.024.032.037z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.LegRoomIcon = LegRoomIcon;
exports.LegRoomIcon.defaultProps = status_1.StatusIcon.defaultProps;
