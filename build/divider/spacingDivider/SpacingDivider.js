"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacingDivider = exports.SpacingDividerSize = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var SpacingDividerSize;
(function (SpacingDividerSize) {
    SpacingDividerSize["SMALL"] = "small";
    SpacingDividerSize["MEDIUM"] = "medium";
    SpacingDividerSize["LARGE"] = "large";
})(SpacingDividerSize || (exports.SpacingDividerSize = SpacingDividerSize = {}));
var StyledSpacingDivider = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    /* No background color for blank separator. */\n    padding-top: ", ";\n  }\n"], ["\n  & {\n    /* No background color for blank separator. */\n    padding-top: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    switch (size) {
        case SpacingDividerSize.LARGE:
            return branding_1.space.xl;
        case SpacingDividerSize.MEDIUM:
            return branding_1.space.l;
        case SpacingDividerSize.SMALL:
        default:
            return branding_1.space.m;
    }
});
var SpacingDivider = function (_a) {
    var _b = _a.size, size = _b === void 0 ? SpacingDividerSize.SMALL : _b;
    return (react_1.default.createElement(StyledSpacingDivider, { role: "presentation", size: size, "aria-hidden": "true" }));
};
exports.SpacingDivider = SpacingDivider;
var templateObject_1;
