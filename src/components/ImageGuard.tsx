"use client";

import { useEffect } from "react";

/**
 * ImageGuard — portfolio image protection component.
 *
 * Attaches two document-level event listeners:
 *   • `contextmenu` — suppresses the right-click context menu on <img> elements,
 *     preventing the "Save image as…" option from appearing.
 *   • `dragstart`   — prevents drag-to-desktop saving of images.
 *
 * It renders no DOM output (returns null) and is placed once in RootLayout so
 * every page benefits without converting each page into a client component.
 * Listeners are cleaned up on unmount via the useEffect return function.
 */
export default function ImageGuard() {
  useEffect(() => {
    // Returns true only when the event target is an <img> element
    const isImage = (target: EventTarget | null) =>
      target instanceof HTMLElement && target.tagName === "IMG";

    // Prevent the browser's native context menu when right-clicking an image
    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };

    // Prevent drag-to-save on images
    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);

    // Cleanup: remove listeners when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []); // Empty dep array → runs once after first render

  // This component is purely behavioural; it renders nothing
  return null;
}
