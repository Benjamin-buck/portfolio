"use client";

import { contact } from "@/constants/data";
import { useState } from "react";

/** Big email line: click copies, with a mailto fallback when the clipboard is unavailable. */
const CopyEmail = ({ className = "" }: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard) return; // let the mailto: link work
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <a
      href={`mailto:${contact.email}`}
      onClick={copy}
      className={`group relative inline-flex items-center gap-4 ${className}`}
    >
      <span className="link-draw break-all">{contact.email}</span>
      <span
        aria-live="polite"
        className="eyebrow relative inline-block overflow-hidden whitespace-nowrap !text-ink-2 rounded-full border border-line px-3 py-1.5"
      >
        <span
          className={`block transition-transform duration-500 ease-out ${copied ? "-translate-y-[150%]" : ""}`}
        >
          Copy
        </span>
        <span
          className={`absolute inset-0 grid place-items-center text-accent transition-transform duration-500 ease-out ${
            copied ? "" : "translate-y-[150%]"
          }`}
        >
          Copied
        </span>
      </span>
    </a>
  );
};

export default CopyEmail;
