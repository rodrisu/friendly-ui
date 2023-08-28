"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInView = void 0;
var react_1 = require("react");
var mockIntersectionObserver = {
    disconnect: function () { },
    observe: function () { },
};
var useInView = function (item, 
// Destructure the object, we only want to track changes to the values it
// contains, not the object itself.
_a) {
    var root = _a.root, rootMargin = _a.rootMargin, threshold = _a.threshold;
    var _b = (0, react_1.useState)(null), entry = _b[0], updateEntry = _b[1];
    (0, react_1.useEffect)(function () {
        var intersectionObserver = null;
        var isSupported = window && typeof window.IntersectionObserver !== 'undefined';
        if (!isSupported) {
            // Add fake implementation when not supported: Old browsers or nodejs tests.
            intersectionObserver = mockIntersectionObserver;
        }
        else {
            // We update the state with only the first element that we receive in the callback
            intersectionObserver = new window.IntersectionObserver(function (_a) {
                var element = _a[0];
                return updateEntry(element);
            }, { root: root, rootMargin: rootMargin, threshold: threshold });
        }
        if (item.current) {
            intersectionObserver.observe(item.current);
        }
        return function () { return intersectionObserver.disconnect(); };
    }, [item, root, rootMargin, threshold]);
    return entry ? entry.isIntersecting : false;
};
exports.useInView = useInView;
