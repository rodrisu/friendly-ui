"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var transitionConfig_1 = require("../transitionConfig");
var Overlay_1 = require("./Overlay");
/**
 *  Basic styles & transitions that apply on all overlays
 * Some of them are adding more transitions (e.g. stepperOverlay)
 */
var StyledOverlay = (0, styled_components_1.default)(Overlay_1.Overlay)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Above the search form. */\n  z-index: 1;\n\n  & .", "-enter {\n    opacity: 0;\n    width: 0;\n  }\n\n  & .", "-enter-active {\n    opacity: 1;\n    width: ", ";\n    transition: width ", "ms ", ",\n      opacity ", "ms ", ",\n      left ", "ms ", ";\n  }\n\n  & .", "-exit {\n    opacity: 1;\n    width: ", ";\n  }\n\n  & .", "-exit-active {\n    opacity: 0;\n    transition: opacity ", "ms ", ";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &\n      .", "-enter-active,\n      &\n      .", "-exit-active {\n      transition-duration: ", "ms !important;\n    }\n  }\n"], ["\n  /* Above the search form. */\n  z-index: 1;\n\n  & .", "-enter {\n    opacity: 0;\n    width: 0;\n  }\n\n  & .", "-enter-active {\n    opacity: 1;\n    width: ", ";\n    transition: width ", "ms ", ",\n      opacity ", "ms ", ",\n      left ", "ms ", ";\n  }\n\n  & .", "-exit {\n    opacity: 1;\n    width: ", ";\n  }\n\n  & .", "-exit-active {\n    opacity: 0;\n    transition: opacity ", "ms ", ";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &\n      .", "-enter-active,\n      &\n      .", "-exit-active {\n      transition-duration: ", "ms !important;\n    }\n  }\n"])), transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, branding_1.componentSizes.searchOverlayWidth, transitionConfig_1.enterTransitionOverlayDuration, transitionConfig_1.transitionOverlayTimingFunction, transitionConfig_1.enterTransitionOverlayDuration, transitionConfig_1.transitionOverlayTimingFunction, transitionConfig_1.enterTransitionOverlayDuration, transitionConfig_1.transitionOverlayTimingFunction, transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, branding_1.componentSizes.searchOverlayWidth, transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, transitionConfig_1.exitTransitionOverlayDuration, transitionConfig_1.transitionOverlayTimingFunction, transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, transitionConfig_1.TRANSITION_OVERLAY_CLASS_NAME, transitionConfig_1.reducedMotionTransitionDuration);
exports.Overlay = StyledOverlay;
var templateObject_1;
