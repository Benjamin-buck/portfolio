"use client";

import { useEffect, useState } from "react";

/** Press G to toggle the 12-column layout grid the site is built on. */
const GridOverlay = () => {
  const [on, setOn] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "g" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName)) return;
      setOn((prev) => {
        const next = !prev;
        setToast(next ? "Layout grid · 12 col" : "Grid hidden");
        return next;
      });
      clearTimeout(timer);
      timer = setTimeout(() => setToast(null), 1600);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={`no-print pointer-events-none fixed inset-0 z-[60] transition-opacity duration-500 ${
          on ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="shell grid h-full grid-cols-4 gap-5 md:grid-cols-12 md:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full bg-accent/[0.07] border-x border-accent/20 ${i >= 4 ? "max-md:hidden" : ""}`}
              style={{
                transform: on ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                transition: `transform 700ms cubic-bezier(0.22,1,0.36,1) ${i * 25}ms`,
              }}
            />
          ))}
        </div>
      </div>
      <div
        role="status"
        className={`no-print fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-ink px-4 py-2 font-mono text-xs text-paper transition-all duration-500 ease-out ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {toast}
      </div>
    </>
  );
};

export default GridOverlay;
