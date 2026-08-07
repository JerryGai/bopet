import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { fosterKennels } from "@/content/foster-kennels";

export const metadata: Metadata = {
  title: "Foster Kennels",
  description:
    "Stainless steel dog and cat foster kennels and a surgical auxiliary table available from Bo's Pet Services.",
  alternates: {
    canonical: "/foster-kennels/",
  },
};

export default function FosterKennelsPage() {
  return (
    <>
      <PageHero
        eyebrow="More about our products"
        title="Foster Kennels"
        image="/images/gallery-boarding-area-1-hero.jpg"
        imageAlt="Foster kennels installed in our boarding area"
        imagePosition="center 20%"
        dividerTo="#ffffff"
      />

      <section className="py-16 space-y-16">
        {fosterKennels.map((kennel, i) => (
          <div key={kennel.id} className={i % 2 === 1 ? "bg-mist py-14" : ""}>
            <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
              <div
                className={
                  kennel.images.length > 1
                    ? "grid grid-cols-2 gap-3"
                    : "grid grid-cols-1"
                }
              >
                {kennel.images.map((src, imgIndex) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 bg-white"
                  >
                    <Image
                      src={src}
                      alt={
                        kennel.images.length > 1
                          ? `${kennel.name}, photo ${imgIndex + 1} of ${kennel.images.length}`
                          : kennel.name
                      }
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-3">
                  {kennel.name}
                </h2>
                {kennel.dimensions.length > 0 && (
                  <ul className="text-lg text-stone-600 space-y-1 mb-3">
                    {kennel.dimensions.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
                <p className="text-clay font-semibold mb-4">
                  Warranty: {kennel.warranty}
                </p>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  Product Features
                </h3>
                <ul className="space-y-2 text-lg text-stone-600 list-disc pl-5">
                  {kennel.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
