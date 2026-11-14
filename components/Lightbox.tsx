"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { pad } from "@/lib/projects";

interface LightboxProps {
  images: { image: string; label: string }[];
  index: number | null;
  onChange: (i: number | null) => void;
  title: string;
}

const Lightbox = ({ images, index, onChange, title }: LightboxProps) => {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const go = useCallback(
    (d: number) => {
      if (index === null) return;
      onChange((index + d + images.length) % images.length);
    },
    [index, images.length, onChange]
  );

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onChange]);

  useEffect(() => {
    if (!open) returnFocus.current?.focus?.();
  }, [open]);

  if (!open) return null;
  const img = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      className="fixed inset-0 z-[80] flex flex-col bg-[#0d0d0c] text-[#edebe6] fade-up"
      style={{ "--d": "0ms" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">
          {title} · <span className="text-white tabular-nums">{pad(index + 1)}</span> / {pad(images.length)}
        </p>
        <button
          ref={closeRef}
          onClick={() => onChange(null)}
          className="rounded-full border border-white/20 px-4 py-1.5 text-sm transition-colors hover:bg-white hover:text-black"
        >
          Close <span className="ml-1 font-mono text-xs opacity-50">esc</span>
        </button>
      </div>

      <div className="relative flex-1 min-h-0 mx-4 md:mx-20" onClick={() => onChange(null)}>
        <Image
          key={img.image}
          src={img.image}
          alt={img.label}
          fill
          sizes="100vw"
          className="object-contain fade-up"
          style={{ "--d": "0ms" } as React.CSSProperties}
          onClick={(e) => e.stopPropagation()}
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-6 px-5 py-5 md:px-8">
        <button
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
        >
          ←
        </button>
        <p className="text-center text-sm text-white/80">
          <span className="font-mono text-xs text-white/40 mr-2">Fig. {pad(index + 1)}</span>
          {img.label}
        </p>
        <button
          onClick={() => go(1)}
          aria-label="Next image"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
