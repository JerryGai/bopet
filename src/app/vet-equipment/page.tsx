import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import {
  vetEquipmentImages,
  facilityImages,
  productDimensions,
  materialDescription,
} from "@/content/vet-equipment";

export const metadata: Metadata = {
  title: "VET Equipment",
  description:
    "Veterinary cage equipment supply and sales from Bo's Pet Services — stainless steel construction, product specs, and facility photos.",
};

export default function VetEquipmentPage() {
  return (
    <>
      <PageHero eyebrow="What else do we have?" title="VET Equipments" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="grid grid-cols-3 gap-3">
            {vetEquipmentImages.map((src) => (
              <div
                key={src}
                className="relative aspect-square rounded-lg overflow-hidden border border-stone-200"
              >
                <Image src={src} alt="VET equipment cage" fill className="object-contain" />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-800 mb-4">
              Product Parameters (units are mm)
            </h2>
            <ul className="space-y-2 text-stone-600">
              {productDimensions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold text-stone-800 mb-4">
            Product Description
          </h2>
          <h3 className="text-lg font-semibold text-stone-700 mb-3">
            Material Description
          </h3>
          <ul className="space-y-2 text-stone-600 list-disc pl-5">
            {materialDescription.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold text-stone-800 mb-4">
            In Our Facility
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {facilityImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-xl px-4">
          <ContactForm formName="contact" title="Contact US" />
        </div>
      </section>
    </>
  );
}
