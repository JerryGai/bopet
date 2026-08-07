"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-100 shadow-sm">
      <div className="bg-amber-500 text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex flex-wrap items-center justify-end gap-4">
          <a href={siteConfig.phoneHref} className="hover:underline">
            {siteConfig.phone}
          </a>
          <a href={siteConfig.emailHref} className="hover:underline">
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/bopet-logo.jpg"
            alt="Bo's Pet Services logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <span className="font-bold text-lg text-stone-800 leading-tight">
            Bo&rsquo;s Pet Services
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-amber-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-amber-50"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-amber-100 bg-white px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-stone-700 hover:bg-amber-50 hover:text-amber-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
