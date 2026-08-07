import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/content/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bo's Pet Services in Warman, SK — call, email, or send a message. Find our address, hours, and answers to common questions.",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero eyebrow="Don't Be Shy" title="Get In Touch" />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Contact us Anytime!
          </h2>
          <div className="space-y-6 mb-10">
            <InfoRow label="Address" value={siteConfig.address} />
            <InfoRow
              label="Phone & Mail"
              value={
                <>
                  <a href={siteConfig.phoneHref} className="block hover:text-amber-600">
                    {siteConfig.phone}
                  </a>
                  <a href={siteConfig.emailHref} className="block hover:text-amber-600">
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
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Send a Message
          </h2>
          <ContactForm formName="contact" />
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-xl px-4 py-16">
        <h2 className="text-xl font-bold text-stone-800 mb-2 text-center">
          Join Our Newsletter
        </h2>
        <p className="text-stone-600 text-center mb-6">
          Join our newsletter to receive recent discounts, great offers,
          lovely pictures, and information on all things here.
        </p>
        <NewsletterForm />
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
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1">
        {label}
      </p>
      <div className="text-stone-700">{value}</div>
    </div>
  );
}
