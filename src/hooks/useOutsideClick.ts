// hooks/useOutsideClick.ts
import { useEffect, useRef, RefObject } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

/**
 * A custom hook that triggers a handler when a click occurs outside the referenced element.
 * @param handler The function to call on an outside click.
 * @returns A ref object to be attached to the DOM element.
 */
function useOutsideClick<T extends HTMLElement = HTMLElement>(
    handler: (event: AnyEvent) => void,
): RefObject<T> {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (event: AnyEvent) => {
            const el = ref.current;
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);

        return () => {
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
        // Reload only if handler changes
    }, [handler]);

    return ref as RefObject<T>;
}

export { useOutsideClick };