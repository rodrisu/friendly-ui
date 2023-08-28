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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proximity = exports.ProximityDisplay = exports.Distances = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var proximityIcon_1 = require("../icon/proximityIcon");
var Proximity_style_1 = require("./Proximity.style");
var Distances;
(function (Distances) {
    Distances["NONE"] = "NONE";
    Distances["CLOSE"] = "CLOSE";
    Distances["MIDDLE"] = "MIDDLE";
    Distances["FAR"] = "FAR";
})(Distances || (exports.Distances = Distances = {}));
var ProximityDisplay;
(function (ProximityDisplay) {
    ProximityDisplay["PILLS"] = "PILLS";
    ProximityDisplay["LABEL"] = "LABEL";
})(ProximityDisplay || (exports.ProximityDisplay = ProximityDisplay = {}));
var size = '20px';
var getColorAndTitle = function (index, value, title) {
    var defaultParams = { title: '', iconColor: branding_1.color.lightGray };
    switch (value) {
        case Distances.CLOSE:
            return index === value
                ? {
                    title: title || defaultParams.title,
                    iconColor: branding_1.color.green,
                }
                : defaultParams;
        case Distances.MIDDLE:
            return index === value
                ? {
                    title: title || defaultParams.title,
                    iconColor: branding_1.color.yellow,
                }
                : defaultParams;
        case Distances.FAR:
            return index === value
                ? {
                    title: title || defaultParams.title,
                    iconColor: branding_1.color.orange,
                }
                : defaultParams;
        default:
            return defaultParams;
    }
};
var Proximity = function (_a) {
    var value = _a.value, title = _a.title, className = _a.className, _b = _a.display, display = _b === void 0 ? ProximityDisplay.PILLS : _b;
    return (react_1.default.createElement(Proximity_style_1.StyledProximity, { className: (0, classcat_1.default)(['kirk-proximity', className]) },
        display === ProximityDisplay.PILLS &&
            [Distances.CLOSE, Distances.MIDDLE, Distances.FAR].map(function (distance) { return (react_1.default.createElement(proximityIcon_1.ProximityIcon, __assign({ key: distance, size: size }, getColorAndTitle(distance, value, title)))); }),
        display === ProximityDisplay.LABEL && (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(proximityIcon_1.ProximityIcon, __assign({ size: size }, getColorAndTitle(value, value, ''))),
            react_1.default.createElement(Proximity_style_1.StyledCaption, { color: getColorAndTitle(value, value, '').iconColor }, title)))));
};
exports.Proximity = Proximity;
