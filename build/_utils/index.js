"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNewLineWithBR = exports.isTouchEventsAvailable = exports.prefix = void 0;
var react_1 = __importStar(require("react"));
var exenv_1 = require("exenv");
var DEFAULT_CLASS_PREFIX = 'kirk';
var prefix = function (modifiers, baseClass) {
    var mods = Object.keys(modifiers).filter(function (elem) { return modifiers[elem]; });
    var classPrefix = DEFAULT_CLASS_PREFIX;
    if (baseClass != null) {
        classPrefix = "".concat(classPrefix, "-").concat(baseClass);
    }
    return mods.map(function (modifier) { return "".concat(classPrefix, "-").concat(modifier); }).join(' ');
};
exports.prefix = prefix;
var isTouchEventsAvailable = function () {
    return exenv_1.canUseDOM && 'ontouchstart' in window && 'ontouchend' in window;
};
exports.isTouchEventsAvailable = isTouchEventsAvailable;
var replaceNewLineWithBR = function (str) {
    return str
        .split('\n')
        .map(function (line) { return react_1.default.createElement(react_1.Fragment, null, line); })
        .reduce(function (acc, curr) { return (react_1.default.createElement(react_1.Fragment, null,
        acc,
        react_1.default.createElement("br", null),
        curr)); });
};
exports.replaceNewLineWithBR = replaceNewLineWithBR;
