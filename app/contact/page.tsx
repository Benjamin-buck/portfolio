"use client";

import { useState } from "react";
import CopyEmail from "@/components/CopyEmail";
import { contact } from "@/constants/data";

const reasons = ["Full-time role", "Contract", "Freelance project", "Just saying hi"];

const Field = ({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) => (
  <label className="group block border-b border-line pb-3 pt-6 transition-colors focus-within:border-ink">
    <span className="eyebrow flex gap-3 transition-colors group-focus-within:text-accent">
      <span className="tabular-nums">{index}</span>
      {label}
    </span>
    {children}
  </label>
);

const inputClass =
  "mt-2 w-full bg-transparent text-lg md:text-xl outline-none placeholder:text-ink-3/70";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: reasons[0], message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: reasons[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="shell pt-12 md:pt-20">
      <p className="eyebrow fade-up mb-4 flex items-center gap-2">
        <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Open to full-time, contract &amp; freelance
      </p>
      <h1 className="display text-[clamp(52px,9vw,140px)]">
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="word-in">Let&apos;s talk.</span>
        </span>
      </h1>

      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <aside className="md:col-span-4 space-y-10 fade-up" style={{ "--d": "300ms" } as React.CSSProperties}>
          <p className="text-lg leading-relaxed text-ink-2">
            Hiring for a product designer or front-end developer role, or have a product that needs both? Tell me a
            little about it.
          </p>
          <div>
            <p className="eyebrow mb-3">Email</p>
            <CopyEmail className="text-base" />
          </div>
          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="space-y-1.5">
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-draw">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link-draw">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="md:col-span-7 md:col-start-6">
          {status === "success" ? (
            <div className="fade-up border-t border-ink pt-10" style={{ "--d": "0ms" } as React.CSSProperties}>
              <p className="eyebrow mb-4 text-accent">Sent</p>
              <h2 className="display text-5xl">Thanks. Talk soon.</h2>
              <p className="mt-4 text-ink-2">Your message is in my inbox. I&apos;ll get back to you shortly.</p>
              <button onClick={() => setStatus("idle")} className="btn-ghost mt-8">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="fade-up" style={{ "--d": "400ms" } as React.CSSProperties}>
              <fieldset>
                <legend className="eyebrow mb-3">What&apos;s this about?</legend>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setForm((f) => ({ ...f, subject: r }))}
                      aria-pressed={form.subject === r}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                        form.subject === r ? "border-ink bg-ink text-paper" : "border-line text-ink-2 hover:border-ink"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4 grid md:grid-cols-2 md:gap-8">
                <Field label="Your name" index="01">
                  <input name="name" value={form.name} onChange={set} required autoComplete="name" placeholder="Jane Doe" className={inputClass} />
                </Field>
                <Field label="Email" index="02">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set}
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="Message" index="03">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={set}
                  required
                  rows={5}
                  placeholder="The role, the team, the product…"
                  className={`${inputClass} resize-none`}
                />
              </Field>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  Something went wrong. Try again, or email me directly at {contact.email}.
                </p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-primary mt-10 !px-7 !py-3.5 disabled:opacity-50">
                {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
