"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusTrap = void 0;
var react_1 = require("react");
var focus_trap_1 = __importDefault(require("focus-trap"));
var keycodes_1 = require("../../_utils/keycodes");
/**
 * This custom hook will trap the focus in the component as long.
 * ESC key is listened and will trigger a way out of the focus trap
 * WARNING: You must provide a way out in the UI of your component (e.g a close button on a modal)
 *
 * @param ref The trap will be set in the chidren of the DOM element that it references to
 * @param onClose Callback when ESC key is pressed
 */
var useFocusTrap = function (ref, onClose) {
    var elementToReturnFocusTo = (0, react_1.useRef)(document.activeElement);
    // Use a Ref to avoid deactivating/activating the trap each time onClose changes.
    var onCloseRef = (0, react_1.useRef)(onClose);
    (0, react_1.useEffect)(function () {
        onCloseRef.current = onClose;
    }, [onClose]);
    (0, react_1.useEffect)(function () {
        var handleKeydown = function (event) {
            if (event.code === keycodes_1.KEYS.ESCAPE) {
                event.stopPropagation();
                onCloseRef.current();
            }
        };
        var focusTrap = (0, focus_trap_1.default)(ref.current);
        focusTrap.activate();
        ref.current.addEventListener('keydown', handleKeydown);
        document.querySelector('html').style.overflow = 'hidden';
        return function () {
            // Wait for next tick so the browser can set the focus on previous element
            setTimeout(function () {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                elementToReturnFocusTo.current.focus();
            });
            focusTrap.deactivate();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            ref.current.removeEventListener('keydown', handleKeydown);
            document.querySelector('html').style.overflow = 'visible';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
exports.useFocusTrap = useFocusTrap;
