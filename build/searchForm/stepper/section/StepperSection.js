"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperSection = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("../../../_internals/item");
var useFocusTrap_1 = require("../../../_internals/useFocusTrap");
var branding_1 = require("../../../_utils/branding");
var button_1 = require("../../../button");
var contentDivider_1 = require("../../../divider/contentDivider");
var chevronIcon_1 = require("../../../icon/chevronIcon");
var baseSection_1 = require("../../../layout/section/baseSection");
var stepper_1 = require("../../../stepper");
var baseStyles_1 = require("../../baseStyles");
var FullHeightSection = (0, styled_components_1.default)(baseSection_1.BaseSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n\n  & .section-content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"], ["\n  height: 100%;\n\n  & .section-content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"])));
var SectionContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  flex: 1 0 auto;\n"], ["\n  width: 100%;\n  flex: 1 0 auto;\n"])));
var SectionFooter = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: auto;\n  padding: ", ";\n"], ["\n  margin-top: auto;\n  padding: ", ";\n"])), branding_1.space.l);
var StepperSection = function (_a) {
    var itemTitle = _a.itemTitle, className = _a.className, onClose = _a.onClose, confirmLabel = _a.confirmLabel, onChange = _a.onChange, props = __rest(_a, ["itemTitle", "className", "onClose", "confirmLabel", "onChange"]);
    var itemTitleState = (0, react_1.useState)(itemTitle)[0];
    var _b = (0, react_1.useState)({
        name: props.name,
        value: props.value,
    }), stepperValue = _b[0], setStepperValue = _b[1];
    var ref = (0, react_1.useRef)(null);
    (0, useFocusTrap_1.useFocusTrap)(ref, onClose);
    return (react_1.default.createElement(baseStyles_1.TransitionSection, { ref: ref, role: "dialog", className: className },
        react_1.default.createElement(FullHeightSection, null,
            react_1.default.createElement(SectionContent, null,
                react_1.default.createElement(item_1.Item, { leftAddon: react_1.default.createElement(chevronIcon_1.ChevronIcon, { direction: chevronIcon_1.ChevronIconDirections.LEFT }), leftTitle: itemTitleState, tag: react_1.default.createElement("button", { type: "button" }), onClick: onClose }),
                react_1.default.createElement(contentDivider_1.ContentDivider, null),
                react_1.default.createElement(stepper_1.Stepper, __assign({}, props, { onChange: setStepperValue, display: stepper_1.StepperDisplay.LARGE }))),
            react_1.default.createElement(SectionFooter, null,
                react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.PRIMARY, onClick: function () { return onChange(stepperValue); } }, confirmLabel)))));
};
exports.StepperSection = StepperSection;
var templateObject_1, templateObject_2, templateObject_3;
