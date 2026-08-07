import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCta from "@/components/ContactCta";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of pets and our facility at Bo's Pet Services in Warman & Saskatoon, SK.",
  alternates: {
    canonical: "/gallery/",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Lovely pets with us"
        title="Gallery"
        image="/images/full/jametlene-reskp-651413-unsplash-full.jpg"
        imageAlt="Happy dog looking up"
        dividerTo="#ffffff"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-lg text-stone-500 mb-8">
          Click any photo to view it full size.
        </p>
        <GalleryGrid images={galleryImages} />
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-xl px-4">
          <ContactCta
            heading="Ready to Bring Your Pet In?"
            description="Contact us to book boarding, daycare, or grooming for your pet."
          />
        </div>
      </section>
    </>
  );
}
