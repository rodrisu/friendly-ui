"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fog = void 0;
var react_1 = __importDefault(require("react"));
require("wicg-inert");
var Fog_style_1 = require("./Fog.style");
var Fog = function (_a) {
    var isLoading = _a.isLoading, children = _a.children;
    return (react_1.default.createElement(Fog_style_1.StyledFogContainer, null,
        react_1.default.createElement(Fog_style_1.StyledFog, { "$isLoading": isLoading, "aria-hidden": "true" }),
        react_1.default.createElement("div", { ref: function (node) { return node && (isLoading ? node.setAttribute('inert', '') : node.removeAttribute('inert')); }, "aria-hidden": isLoading }, children)));
};
exports.Fog = Fog;
