import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import { requirements } from "@/content/requirements";

export const metadata: Metadata = {
  title: "Requirements & Form",
  description:
    "Requirements for boarding and daycare at Bo's Pet Services, plus a downloadable intake form to bring on your first visit.",
};

export default function RequirementsFormPage() {
  return (
    <>
      <PageHero title="Requirements & Form" />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-stone-600 leading-relaxed mb-12 text-center">
          At Bo&rsquo;s Pet Service Store, our first priority for your pet is
          safety. The following requirements will ensure your pet has the
          safest and most comfortable stay possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-amber-600 font-semibold text-sm mb-1">01.</p>
            <h2 className="text-xl font-bold text-stone-800 mb-4">
              Requirements
            </h2>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3 text-stone-600">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-amber-600 font-semibold text-sm mb-1">02.</p>
            <h2 className="text-xl font-bold text-stone-800 mb-4">Form Download</h2>
            <p className="text-stone-600 mb-6">
              Please complete the form below and bring with you on your
              first visit.
            </p>
            <a
              href="/files/bos-pet-service-store-requirements.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              Bo&rsquo;s Pet Service Store Requirements (click to download)
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-xl font-bold text-stone-800 mb-2 text-center">
            Join Our Newsletter
          </h2>
          <p className="text-stone-600 text-center mb-6">
            Join our newsletter to receive recent discounts, great offers,
            lovely pictures, and information on all things here.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
