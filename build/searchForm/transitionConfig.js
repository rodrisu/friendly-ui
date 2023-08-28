"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducedMotionTransitionDuration = exports.transitionSectionTimeout = exports.exitTransitionSectionDuration = exports.enterTransitionSectionDuration = exports.TRANSITION_SECTION_CLASS_NAME = exports.transitionOverlayTimeout = exports.exitTransitionOverlayDuration = exports.enterTransitionOverlayDuration = exports.transitionOverlayTimingFunction = exports.TRANSITION_OVERLAY_CLASS_NAME = void 0;
/**
 * Transition config for search form Overlay (used on large devices)
 */
exports.TRANSITION_OVERLAY_CLASS_NAME = 'kirk-searchForm-overlay-transition';
exports.transitionOverlayTimingFunction = 'cubic-bezier(0.2, 1, 0.2, 1)';
exports.enterTransitionOverlayDuration = 350;
exports.exitTransitionOverlayDuration = 500;
exports.transitionOverlayTimeout = {
    enter: exports.enterTransitionOverlayDuration,
    exit: exports.exitTransitionOverlayDuration,
};
/**
 * Transition config for search form Section (used on large devices)
 */
exports.TRANSITION_SECTION_CLASS_NAME = 'kirk-searchForm-section-transition';
exports.enterTransitionSectionDuration = 350;
exports.exitTransitionSectionDuration = 350;
exports.transitionSectionTimeout = {
    enter: exports.enterTransitionSectionDuration,
    exit: exports.exitTransitionSectionDuration,
};
/**
 * Global Reduced motion duration
 */
exports.reducedMotionTransitionDuration = 0;
