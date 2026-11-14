"use client";

import React, { useEffect, useRef } from "react";

type Variant = "up" | "mask" | "wipe" | "rule";

interface RevealProps {
  as?: React.ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
  /** For variant="mask": each entry becomes one masked line. */
  lines?: React.ReactNode[];
  [key: string]: unknown;
}

/**
 * Adds `data-in` once the element scrolls into view; globals.css does the rest.
 */
const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  lines,
  ...rest
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-in", "");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-in", "");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`rv-${variant} ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
      {...rest}
    >
      {variant === "mask" && lines
        ? lines.map((line, i) => (
            <span key={i} className="rv-line">
              <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
            </span>
          ))
        : children}
    </Tag>
  );
};

export default Reveal;
