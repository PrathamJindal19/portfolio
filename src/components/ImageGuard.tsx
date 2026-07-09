"use client";

import { useEffect } from "react";

/**
 * Blocks the right-click context menu and drag-to-save on all <img> elements
 * (including next/image output) without turning every parent into a client component.
 */
export default function ImageGuard() {
  useEffect(() => {
    const isImage = (target: EventTarget | null) =>
      target instanceof HTMLElement && target.tagName === "IMG";

    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };
    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
