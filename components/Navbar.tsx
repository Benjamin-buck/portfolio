"use client";

import { navigationLinks } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

/** Local time in Kingston, rendered client-side only to avoid hydration mismatch. */
const LocalTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Toronto",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time || "--:--"}</span>;
};

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 160);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The indicator follows the hovered link, and rests on the active one.
  const activeHref = navigationLinks.find((l) => isActive(pathname, l.href))?.href ?? null;
  const target = hovered ?? activeHref;

  useIsoLayoutEffect(() => {
    const measure = () => {
      const el = target ? linkRefs.current[target] : null;
      const parent = listRef.current;
      if (!el || !parent) return setPill(null);
      setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  return (
    <>
      <header
        className={`no-print sticky top-0 z-40 transition-[transform,background-color,border-color] duration-500 ease-out border-b ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "bg-paper/90 backdrop-blur-md border-line" : "bg-paper border-transparent"}`}
      >
        <nav className="shell flex h-16 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3 relative z-50" aria-label="Benjamin Alan, home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-paper font-serif text-[17px] leading-none transition-transform duration-500 ease-out group-hover:rotate-[-12deg]">
              B
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold tracking-tight">Benjamin Alan</span>
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
                Product Designer · Front-end
              </span>
            </span>
          </Link>

          <div
            ref={listRef}
            className="relative hidden md:flex items-center"
            onMouseLeave={() => setHovered(null)}
          >
            <span
              aria-hidden
              className="absolute top-1/2 h-8 -translate-y-1/2 rounded-full bg-ink/[0.06] transition-[left,width,opacity] duration-500 ease-out"
              style={{
                left: pill?.left ?? 0,
                width: pill?.width ?? 0,
                opacity: pill ? 1 : 0,
              }}
            />
            {navigationLinks.map(({ label, href }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  ref={(el) => {
                    linkRefs.current[href] = el;
                  }}
                  onMouseEnter={() => setHovered(href)}
                  onFocus={() => setHovered(href)}
                  onBlur={() => setHovered(null)}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {label}
                  {active && (
                    <span aria-hidden className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="eyebrow hidden lg:inline">
              Kingston <LocalTime />
            </span>
            <Link href="/contact" className="btn-primary !py-2 !px-4">
              <span className="breathe h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
              Hire me
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden relative z-50 -mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-500 ease-out ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-500 ease-out ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-30 bg-paper transition-[clip-path] duration-700 ease-out ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="shell flex h-full flex-col pt-24 pb-10">
          <ul className="flex flex-col">
            {[{ label: "Home", href: "/" }, ...navigationLinks].map(({ label, href }, i) => (
              <li key={href} className="overflow-hidden border-b border-line">
                <Link
                  href={href}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline justify-between py-4 transition-transform duration-700 ease-out"
                  style={{
                    transform: open ? "none" : "translateY(100%)",
                    transitionDelay: open ? `${120 + i * 50}ms` : "0ms",
                  }}
                >
                  <span className="display text-5xl">{label}</span>
                  <span className="eyebrow">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-auto">
            Kingston, ON · <LocalTime />
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
