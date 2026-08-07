"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getFullImage, type GalleryImage } from "@/content/gallery";

export default function GalleryGrid({
  images,
  aspectClassName = "aspect-[400/516]",
  gridClassName = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
}: {
  images: GalleryImage[];
  aspectClassName?: string;
  gridClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
        return;
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + images.length) % images.length
        );
        return;
      }
      if (e.key === "Tab") {
        // Minimal focus trap across the three dialog controls.
        const focusable = [
          closeButtonRef.current,
          prevButtonRef.current,
          nextButtonRef.current,
        ].filter((el): el is HTMLButtonElement => el !== null);
        if (focusable.length === 0) return;
        const currentIndex = focusable.indexOf(
          document.activeElement as HTMLButtonElement
        );
        e.preventDefault();
        const delta = e.shiftKey ? -1 : 1;
        const nextIndex =
          (currentIndex + delta + focusable.length) % focusable.length;
        focusable[nextIndex]?.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className={gridClassName}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setActiveIndex(i);
            }}
            className={`relative block ${aspectClassName} overflow-hidden rounded-lg cursor-zoom-in group`}
            aria-label={`View larger image: ${img.alt || "gallery photo"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading={i < 8 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt || "Image viewer"}
          onClick={() => setActiveIndex(null)}
        >
          <p className="sr-only" role="status">
            Image {activeIndex + 1} of {images.length}
            {active.alt ? `: ${active.alt}` : ""}
          </p>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-gold transition-colors"
            aria-label="Close image viewer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            ref={prevButtonRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? i : (i - 1 + images.length) % images.length
              );
            }}
            className="absolute left-2 sm:left-6 text-white/80 hover:text-gold transition-colors p-2"
            aria-label={`Previous image (${((activeIndex - 1 + images.length) % images.length) + 1} of ${images.length})`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            ref={nextButtonRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
            }}
            className="absolute right-2 sm:right-6 text-white/80 hover:text-gold transition-colors p-2"
            aria-label={`Next image (${((activeIndex + 1) % images.length) + 1} of ${images.length})`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getFullImage(active.src)}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
