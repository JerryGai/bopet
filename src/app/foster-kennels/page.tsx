import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { fosterKennels } from "@/content/foster-kennels";

export const metadata: Metadata = {
  title: "Foster Kennels",
  description:
    "Stainless steel dog and cat foster kennels and a surgical auxiliary table available from Bo's Pet Services.",
};

export default function FosterKennelsPage() {
  return (
    <>
      <PageHero eyebrow="More about our products" title="Foster Kennels" />

      <section className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {fosterKennels.map((kennel) => (
          <div
            key={kennel.id}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <div
              className={
                kennel.images.length > 1
                  ? "grid grid-cols-2 gap-3"
                  : "grid grid-cols-1"
              }
            >
              {kennel.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 bg-stone-50"
                >
                  <Image src={src} alt={kennel.name} fill className="object-contain" />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-3">
                {kennel.name}
              </h2>
              {kennel.dimensions.length > 0 && (
                <ul className="text-stone-600 space-y-1 mb-3">
                  {kennel.dimensions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              <p className="text-sm text-amber-700 font-medium mb-4">
                Warranty: {kennel.warranty}
              </p>
              <h3 className="font-semibold text-stone-800 mb-2">
                Product Features
              </h3>
              <ul className="space-y-2 text-stone-600 list-disc pl-5">
                {kennel.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
