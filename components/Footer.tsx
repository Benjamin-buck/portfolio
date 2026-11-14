import { contact, navigationLinks } from "@/constants/data";
import Link from "next/link";
import CopyEmail from "./CopyEmail";
import Reveal from "./motion/Reveal";

const Footer = () => {
  return (
    <footer className="no-print mt-32 border-t border-line">
      <div className="shell pt-20 pb-10">
        <p className="eyebrow mb-6">
          <span className="breathe mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" />
          Open to product design &amp; front-end roles
        </p>
        <Reveal
          as="h2"
          variant="mask"
          className="display text-[clamp(44px,8vw,128px)]"
          lines={[
            "Hiring a designer",
            <>
              who <em className="italic text-accent">ships</em>?
            </>,
          ]}
        />
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <CopyEmail className="text-xl md:text-2xl" />
          <Link href="/resume" className="btn-ghost">
            View résumé
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Index</p>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="link-draw text-ink-2 hover:text-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-draw text-ink-2 hover:text-ink">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link-draw text-ink-2 hover:text-ink">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-6 md:text-right">
            <p className="eyebrow mb-4">Colophon</p>
            <p className="text-sm text-ink-2 leading-relaxed md:ml-auto md:max-w-sm">
              Designed and built by me. Set in Instrument Serif, Schibsted Grotesk and IBM Plex Mono.
              Next.js on Vercel.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="eyebrow">© {new Date().getFullYear()} Benjamin Alan · {contact.location}</p>
          <p className="eyebrow hidden md:block">
            Press <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-ink-2">G</kbd> to see the grid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
