"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReducedMotion = void 0;
var react_1 = require("react");
/**
 * This custom hook will return reduced motion boolean
 * To be used to disable animation based on user preferences
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 *
 */
var useReducedMotion = function () {
    var _a = (0, react_1.useState)(false), reducedMotion = _a[0], setReducedMotion = _a[1];
    (0, react_1.useEffect)(function () {
        setReducedMotion(window.matchMedia('(prefers-reduced-motion)').matches);
    }, []);
    return reducedMotion;
};
exports.useReducedMotion = useReducedMotion;
