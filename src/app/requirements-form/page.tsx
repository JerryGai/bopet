import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import { requirements } from "@/content/requirements";

export const metadata: Metadata = {
  title: "Requirements & Form",
  description:
    "Requirements for boarding and daycare at Bo's Pet Services, plus a downloadable intake form to bring on your first visit.",
  alternates: {
    canonical: "/requirements-form/",
  },
};

export default function RequirementsFormPage() {
  return (
    <>
      <PageHero
        title="Requirements & Form"
        image="/images/full/andrew-pons-9713-unsplash-full.jpg"
        imageAlt="Calm, well-behaved dog"
        dividerTo="#ffffff"
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg text-stone-600 leading-relaxed mb-12 text-center">
          At Bo&rsquo;s Pet Service Store, our first priority for your pet is
          safety. The following requirements will ensure your pet has the
          safest and most comfortable stay possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-clay font-semibold mb-1">01.</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-4">
              Requirements
            </h2>
            <ul className="space-y-3 text-lg">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3 text-stone-600">
                  <span className="text-clay mt-1" aria-hidden="true">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-clay font-semibold mb-1">02.</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-4">
              Form Download
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              Please complete the form below and bring with you on your
              first visit.
            </p>
            <a
              href="/files/bos-pet-service-store-requirements.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-tan px-6 py-3 text-lg font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
            >
              Bo&rsquo;s Pet Service Store Requirements (click to download)
            </a>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-xl px-4">
          <ContactCta
            heading="Questions About Getting Started?"
            description="Reach out and we'll help you get everything set up for your pet's first visit."
          />
        </div>
      </section>
    </>
  );
}
