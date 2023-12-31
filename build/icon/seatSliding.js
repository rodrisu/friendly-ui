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
exports.SeatSlidingIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var SeatSlidingIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M6.634 17.146c.16.174.178.443.053.638l-.053.07L5.575 19h3.963c.255 0 .462.224.462.5a.49.49 0 01-.379.492L9.538 20H5.576l1.058 1.146c.16.174.178.443.053.638l-.053.07a.435.435 0 01-.589.057l-.064-.057-1.846-2-.009-.01-.017-.022.018.021-.039-.05-.018-.029a.523.523 0 01-.068-.305L4 19.477l.001-.025a.539.539 0 01.08-.236l.012-.02a.495.495 0 01.03-.037l.011-.013 1.846-2a.437.437 0 01.653 0zm11.32-.057l.065.057 1.846 2 .009.01.016.021-.018-.021.039.05.02.03a.523.523 0 01.054.391.519.519 0 01-.067.157l-.012.02a.495.495 0 01-.03.037l-.011.013-1.846 2a.437.437 0 01-.653 0 .532.532 0 01-.053-.638l.053-.07L18.423 20h-3.961c-.255 0-.462-.224-.462-.5a.49.49 0 01.379-.492l.083-.008h3.962l-1.058-1.146a.532.532 0 01-.053-.638l.053-.07a.435.435 0 01.589-.057zM15.147 2c1.01 0 1.814.91 1.967 2.085l.018.17.58 7.711h.295c1.051 0 1.912.823 1.989 1.867l.005.15v1.519a.497.497 0 01-.404.49l-.089.008H4.493a.494.494 0 01-.485-.409L4 15.501v-1.518c0-1.063.813-1.934 1.845-2.011l.15-.006h.293l.581-7.712c.091-1.199.853-2.163 1.843-2.248L8.854 2h6.292zm2.86 10.963H5.994c-.52 0-.948.398-1.003.909l-.006.111v1.02h14.03v-1.02c0-.485-.336-.892-.785-.995l-.114-.02-.11-.005zm-2.86-9.966H8.854c-.45 0-.882.48-.985 1.18l-.017.153-.576 7.636h9.447l-.575-7.636c-.055-.729-.46-1.259-.906-1.326l-.096-.007z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.SeatSlidingIcon = SeatSlidingIcon;
exports.SeatSlidingIcon.defaultProps = status_1.StatusIcon.defaultProps;
