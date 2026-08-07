import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/content/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bo's Pet Services in Warman, SK — call, email, or send a message. Find our address, hours, and answers to common questions.",
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Don't Be Shy"
        title="Get In Touch"
        image="/images/gallery-storefront-b-hero.jpg"
        imageAlt="Bo's Pet Services storefront entrance"
        dividerTo="#ffffff"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
            Contact us Anytime!
          </h2>
          <div className="space-y-6 mb-10">
            <InfoRow label="Address" value={siteConfig.address} />
            <InfoRow
              label="Phone & Mail"
              value={
                <>
                  <a href={siteConfig.phoneHref} className="block hover:text-clay">
                    {siteConfig.phone}
                  </a>
                  <a href={siteConfig.emailHref} className="block hover:text-clay">
                    {siteConfig.email}
                  </a>
                </>
              }
            />
            <InfoRow
              label="Open Hours"
              value={
                <>
                  {siteConfig.hours.map((h) => (
                    <span key={h.label} className="block">
                      {h.label}: {h.value}
                    </span>
                  ))}
                </>
              }
            />
          </div>

          <div className="rounded-xl overflow-hidden border border-stone-200">
            <iframe
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              title="Bo's Pet Services location map"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
            Send a Message
          </h2>
          <ContactForm formName="contact" />
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-clay mb-1">
        {label}
      </p>
      <div className="text-lg text-stone-700">{value}</div>
    </div>
  );
}
