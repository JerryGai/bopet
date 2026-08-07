import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CurveDivider from "@/components/CurveDivider";
import ContactForm from "@/components/ContactForm";
import {
  daycareRates,
  boardingInfo,
  groomingSections,
  bathSection,
} from "@/content/pricing";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Daycare, boarding, grooming and bath pricing for dogs and cats at Bo's Pet Services in Warman & Saskatoon, SK.",
  alternates: {
    canonical: "/pricing/",
  },
};

const quickLinks = [
  { href: "#daycare", label: "Daycare Rates" },
  { href: "#boarding", label: "Boarding" },
  { href: "#grooming", label: "Grooming" },
  { href: "#bath", label: "Bath & Tidy" },
];

function RateTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-base sm:text-lg text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-tan">
            {headers.map((h) => (
              <th key={h} className="py-3 pr-4 font-semibold text-stone-800">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-stone-200">
              <td className="py-3 pr-4 font-medium text-stone-700">
                {row.label}
              </td>
              {row.values.map((v, i) => (
                <td key={i} className="py-3 pr-4 text-stone-600">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Daycare, Boarding, Grooming…"
        title="Pricing Table"
        image="/images/full/gallery-bathing-full.jpg"
        imageAlt="Dog being bathed at Bo's Pet Services"
        dividerTo="#ffffff"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 space-y-20">
        <p className="text-center text-lg text-stone-600">
          If you have questions, we&rsquo;d love to discuss them with you.
        </p>

        <nav
          aria-label="Pricing sections"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-tan/50 bg-gold/10 px-5 py-2 text-sm sm:text-base font-semibold text-clay hover:bg-gold/20 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Daycare */}
        <div id="daycare" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
            Daycare Rates
          </h2>
          <RateTable headers={daycareRates.headers} rows={daycareRates.rows} />
          <ul className="mt-4 space-y-1 text-sm text-stone-500">
            {daycareRates.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

        {/* Boarding */}
        <div id="boarding" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-2">
            Boarding
          </h2>
          <p className="text-lg text-stone-600 mb-6">{boardingInfo.intro}</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {boardingInfo.rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between rounded-lg border border-stone-200 px-4 py-3 text-lg"
              >
                <span className="font-medium text-stone-700">{r.label}</span>
                <span className="text-stone-600">{r.price}</span>
              </div>
            ))}
          </div>
          <ul className="space-y-1 text-sm text-stone-500 mb-8">
            {boardingInfo.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-stone-800 mb-3">
            Multi-day Discounts
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {boardingInfo.discounts.map((d) => (
              <div
                key={d.range}
                className="rounded-lg bg-gold/10 border border-gold/30 px-4 py-3 text-center"
              >
                <p className="text-lg font-semibold text-clay">{d.discount}</p>
                <p className="text-stone-600">{d.range}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 mt-3">
            {boardingInfo.discountNote}
          </p>
        </div>

        {/* Grooming */}
        <div id="grooming" className="scroll-mt-32 space-y-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800">
            Grooming
          </h2>
          {groomingSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                {section.title}
              </h3>
              <p className="text-lg text-stone-600 mb-4">
                {section.description}
              </p>
              {section.headers && section.rows && (
                <RateTable headers={section.headers} rows={section.rows} />
              )}
              {section.note && (
                <p className="text-lg text-stone-600 mt-4">{section.note}</p>
              )}
              {section.extras && (
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {section.extras.map((e) => (
                    <div
                      key={e.label}
                      className="flex items-center justify-between rounded-lg border border-stone-200 px-4 py-3 text-lg"
                    >
                      <span className="font-medium text-stone-700">
                        {e.label}
                      </span>
                      <span className="text-stone-600">{e.price}</span>
                    </div>
                  ))}
                </div>
              )}
              {section.notes && (
                <ul className="mt-4 space-y-1 text-sm text-stone-500">
                  {section.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bath */}
        <div id="bath" className="scroll-mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-2">
            {bathSection.title}
          </h2>
          <p className="text-lg text-stone-600 mb-4">
            {bathSection.description}
          </p>
          <RateTable headers={bathSection.headers} rows={bathSection.rows} />
          <ul className="mt-4 space-y-1 text-sm text-stone-500">
            {bathSection.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Request special price */}
      <section className="relative bg-mist pt-16 pb-24">
        <div className="mx-auto max-w-xl px-4">
          <ContactForm
            formName="pricing-inquiry"
            title="Request a special service price"
          />
        </div>
      </section>
    </>
  );
}
