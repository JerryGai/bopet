import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-20 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Bo&rsquo;s Pet Services
          </h3>
          <p className="text-sm leading-relaxed">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-amber-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.address}</li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-amber-400">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="hover:text-amber-400">
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
          <h3 className="text-white font-semibold mb-3">Join Our Newsletter</h3>
          <p className="text-sm mb-3">
            Recent discounts, great offers, lovely pictures, and news.
          </p>
          <NewsletterForm variant="dark" />
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-stone-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            &copy; {new Date().getFullYear()} Bo&rsquo;s Pet Services. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
