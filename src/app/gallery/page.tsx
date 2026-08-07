import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of pets and our facility at Bo's Pet Services in Warman & Saskatoon, SK.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Lovely pets with us" title="Gallery" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-lg break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={516}
                loading={i < 8 ? "eager" : "lazy"}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
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
