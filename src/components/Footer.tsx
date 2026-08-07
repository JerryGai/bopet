import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="pt-4 bg-ink text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-gold font-semibold text-xl mb-3">
            Bo&rsquo;s Pet Services
          </h3>
          <p className="text-sm leading-relaxed">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-gold font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.address}</li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-gold">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.hours.map((h) => (
              <li key={h.label}>
                {h.label}: {h.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold font-semibold text-lg mb-3">
            Ready to Book?
          </h3>
          <p className="text-sm mb-4">
            Reach out and we&rsquo;ll get your pet set up for boarding,
            daycare, or grooming.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex rounded-md bg-tan px-4 py-2 text-sm font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 flex w-full flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className=" px-4 py-4 text-xs text-stone-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            &copy; {new Date().getFullYear()} Bo&rsquo;s Pet Services. All
            rights reserved.
          </span>
        </div>
        <div className="px-4 py-4 text-xs text-stone-500 flex flex-wrap items-center justify-between gap-2">
          supported by{" "}
          <a
            href="https://www.realtoweb.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Real To Web Technologies Inc
          </a>
        </div>
      </div>
    </footer>
  );
}
