/**
 * This custom hook will trap the focus in the component as long.
 * ESC key is listened and will trigger a way out of the focus trap
 * WARNING: You must provide a way out in the UI of your component (e.g a close button on a modal)
 *
 * @param ref The trap will be set in the chidren of the DOM element that it references to
 * @param onClose Callback when ESC key is pressed
 */
export declare const useFocusTrap: (ref: React.MutableRefObject<HTMLElement>, onClose: () => void) => void;
