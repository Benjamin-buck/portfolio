"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Word = { text: string; italic?: boolean; accent?: boolean };

// Two lines; every word is a selectable "layer".
const LINES: Word[][] = [
  [{ text: "Designing" }, { text: "products," }],
  [{ text: "then", italic: true, accent: true }, { text: "building" }, { text: "them." }],
];
const TOUR = [0, 1, 2, 3, 4];
const REST = 2;

type Box = { x: number; y: number; w: number; h: number; font: string };

/**
 * A headline that behaves like a design-tool canvas: hover (or tap) a word to
 * select it. The frame shows handles, real pixel dimensions and the type spec.
 * On load a labelled cursor tours the words once, then hands over to the visitor.
 */
const SelectableHeadline = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [touring, setTouring] = useState(true);
  const [ready, setReady] = useState(false);

  const measure = useCallback((i: number | null) => {
    const wrap = wrapRef.current;
    const el = i === null ? null : wordRefs.current[i];
    if (!wrap || !el) return setBox(null);
    const a = wrap.getBoundingClientRect();
    const b = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const size = Math.round(parseFloat(cs.fontSize));
    setBox({
      x: b.left - a.left,
      y: b.top - a.top,
      w: b.width,
      h: b.height,
      font: `Instrument Serif · ${cs.fontStyle === "italic" ? "Italic" : "Regular"} · ${size}px`,
    });
  }, []);

  useIsoLayoutEffect(() => {
    measure(selected);
  }, [selected, measure]);

  useEffect(() => {
    const onResize = () => measure(selected);
    window.addEventListener("resize", onResize);
    // Fonts swapping in changes word widths.
    document.fonts?.ready.then(onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [selected, measure]);

  // One guided tour after the words have risen in.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTouring(false);
      setSelected(REST);
      setReady(true);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setReady(true), 1100));
    TOUR.forEach((w, step) => {
      timers.push(setTimeout(() => setSelected(w), 1200 + step * 900));
    });
    timers.push(
      setTimeout(() => {
        setSelected(REST);
        setTouring(false);
      }, 1200 + TOUR.length * 900)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const take = (i: number) => {
    setTouring(false);
    setSelected(i);
  };

  let wordIndex = -1;

  return (
    <div ref={wrapRef} className="relative" onMouseLeave={() => !touring && setSelected(REST)}>
      <h1 className="display text-[clamp(52px,10vw,152px)]" aria-label="Designing products, then building them.">
        {LINES.map((line, li) => (
          <span key={li} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            {line.map((w, wi) => {
              wordIndex += 1;
              const i = wordIndex;
              return (
                <React.Fragment key={i}>
                  <span
                    ref={(el) => {
                      wordRefs.current[i] = el;
                    }}
                    aria-hidden
                    onMouseEnter={() => take(i)}
                    onClick={() => take(i)}
                    className={`word-in cursor-default ${w.italic ? "italic" : ""} ${
                      w.accent ? "text-accent" : ""
                    }`}
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    {w.text}
                  </span>
                  {wi < line.length - 1 && " "}
                </React.Fragment>
              );
            })}
          </span>
        ))}
      </h1>

      {/* Selection frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 transition-[transform,width,height,opacity] duration-500 ease-out max-md:hidden"
        style={{
          transform: box ? `translate(${box.x}px, ${box.y}px)` : undefined,
          width: box?.w ?? 0,
          height: box?.h ?? 0,
          opacity: box && ready ? 1 : 0,
        }}
      >
        <div className="absolute inset-0 border-[1.5px] border-accent" />
        {["-left-[4px] -top-[4px]", "-right-[4px] -top-[4px]", "-left-[4px] -bottom-[4px]", "-right-[4px] -bottom-[4px]"].map(
          (pos) => (
            <span key={pos} className={`absolute h-[8px] w-[8px] border-[1.5px] border-accent bg-white ${pos}`} />
          )
        )}
        {/* Layer name */}
        <span className="absolute -top-7 left-0 whitespace-nowrap font-mono text-[11px] text-accent">
          {box?.font}
        </span>
        {/* Dimensions */}
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[3px] bg-accent px-1.5 py-0.5 font-mono text-[11px] text-white tabular-nums">
          {box ? `${Math.round(box.w)} × ${Math.round(box.h)}` : ""}
        </span>
      </div>

      {/* Guided cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 transition-[transform,opacity] duration-700 ease-out max-md:hidden"
        style={{
          transform: box ? `translate(${box.x + box.w - 6}px, ${box.y + box.h - 10}px)` : undefined,
          opacity: touring && ready && box ? 1 : 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" className="drop-shadow-sm">
          <path d="M1 1l6.5 15 2.2-6.3L16 7.5z" fill="rgb(var(--ink))" stroke="rgb(var(--paper))" strokeWidth="1.2" />
        </svg>
        <span className="ml-3 -mt-1 inline-block rounded-full rounded-tl-none bg-ink px-2 py-0.5 text-[11px] font-medium text-paper">
          Ben
        </span>
      </div>
    </div>
  );
};

export default SelectableHeadline;
