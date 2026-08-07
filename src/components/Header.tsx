"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    const normalize = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);
    const current = normalize(pathname ?? "");
    const target = normalize(href);
    if (target === "/") return current === "/";
    return current === target || current.startsWith(`${target}/`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gold/30 shadow-sm">
      <div className="bg-gold text-ink text-sm">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex flex-wrap items-center justify-end gap-4 font-mono">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.emailHref}
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/bopet-logo.jpg"
            alt="Bo's Pet Services logo"
            width={738}
            height={248}
            className="rounded-full object-cover w-[126px] xl:w-[248px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center lg:gap-2 text-xs lg:text-base font-medium text-stone-700"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-gold/20 text-clay font-semibold"
                    : "hover:bg-gold/10 hover:text-clay"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-gold/10"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-gold/30 bg-white px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 transition-colors ${
                      active
                        ? "bg-gold/20 text-clay font-semibold"
                        : "text-stone-700 hover:bg-gold/10 hover:text-clay"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
