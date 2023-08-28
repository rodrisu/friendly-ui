"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Illustration = void 0;
var react_1 = __importDefault(require("react"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledIllustration = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: 33vh;\n  width: 100%;\n  object-fit: contain;\n"], ["\n  max-height: 33vh;\n  width: 100%;\n  object-fit: contain;\n"])));
var Illustration = function (_a) {
    var children = _a.children, _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.viewBox, viewBox = _c === void 0 ? '0 0 375 204' : _c;
    return (react_1.default.createElement(StyledIllustration, { viewBox: viewBox, fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": (0, lodash_isempty_1.default)(title) },
        title && react_1.default.createElement("title", null, title),
        children));
};
exports.Illustration = Illustration;
var templateObject_1;
