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
exports.BubbleIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var BubbleIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M21.951,10.281C21.98,10.023,22,9.764,22,9.5C22,4.813,17.29,1,11.5,1C5.71,1,1,4.813,1,9.5c0,1.801,0.691,3.52,2,4.979 V19.5c0,0.173,0.09,0.334,0.237,0.426C3.317,19.975,3.409,20,3.5,20c0.077,0,0.153-0.018,0.224-0.053l4.431-2.215 C9.667,19.752,12.424,21,15.5,21c0.547,0,1.097-0.042,1.636-0.123l4.141,2.07C21.347,22.982,21.424,23,21.5,23 c0.092,0,0.183-0.025,0.263-0.074C21.91,22.834,22,22.673,22,22.5v-3.814c1.292-1.173,2-2.651,2-4.186 C24,12.946,23.27,11.461,21.951,10.281z M3.865,13.943C2.645,12.641,2,11.104,2,9.5C2,5.364,6.262,2,11.5,2S21,5.364,21,9.5 S16.738,17,11.5,17c-1.023,0-2.045-0.135-3.038-0.399c-0.118-0.029-0.244-0.019-0.353,0.036L4,18.691v-4.406 C4,14.158,3.952,14.036,3.865,13.943z M21.176,18.079C21.064,18.175,21,18.313,21,18.46v3.23l-3.561-1.78 c-0.094-0.048-0.203-0.064-0.307-0.046C16.597,19.954,16.047,20,15.5,20c-2.334,0-4.511-0.826-5.917-2.162 C10.219,17.935,10.858,18,11.5,18c4.962,0,9.12-2.804,10.212-6.554C22.543,12.351,23,13.411,23,14.5 C23,15.805,22.353,17.076,21.176,18.079z" }))); };
exports.BubbleIcon = BubbleIcon;
exports.BubbleIcon.defaultProps = icon_1.BaseIconDefaultProps;
