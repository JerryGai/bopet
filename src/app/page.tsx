import Image from "next/image";
import Link from "next/link";
import { homeGalleryPreview } from "@/content/home-gallery-preview";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/alvan-nee-1316903-unsplash-hero.jpg"
            alt="Dog cared for at Bo's Pet Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36 text-center text-white">
          <p className="text-amber-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Professional pet service store
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Care a Pet</h1>
          <p className="max-w-2xl mx-auto text-stone-200 leading-relaxed mb-8">
            From Boarding to Daycare, to the Grooming experience, there&rsquo;s
            simply no pet services provider in Warman &amp; Saskatoon like us:
            Pets on Home. We specialize in taking complete care of your pet,
            whether it&rsquo;s a simple nail trim visit or an extended stay
            for your furry friend with special needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us/"
              className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/pricing/"
              className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See the Price
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-2">
            About Us
          </p>
          <h2 className="text-3xl font-bold text-stone-800">
            About Our Service
          </h2>
        </div>
        <div className="space-y-5 text-stone-600 leading-relaxed">
          <p>
            Bo&rsquo;s Pet Store was opened in 2019 by Bo He. Everything you
            need for your pet, all in one place.
          </p>
          <p>
            Whether your pet needs a day of play, one night off or an
            extended vacation, their nails trimmed or a wash, Bo&rsquo;s Pet
            Service Store is here to make it happen. Our pet services
            facility in Warman &amp; Saskatoon is outfitted with everything
            your dog or cat could want from daycare entertainment, overnight
            boarding, and pet detailing services served up with care by our
            personable staff.
          </p>
          <p>
            We understand that trusting others for pet services can be
            stressful and that&rsquo;s why we&rsquo;ve built our services from
            the ground up with both of you in mind. In everything we do, our
            goal is to create a relaxing and pleasant experience both for
            your pet as well as for yourself. Our Guest Service Attendants
            are very experienced and have been chosen to make sure your
            pet&rsquo;s getaway is all that it can be.
          </p>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-2">
              Recently
            </p>
            <h2 className="text-3xl font-bold text-stone-800">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {homeGalleryPreview.map((src) => (
              <div
                key={src}
                className="relative aspect-[400/284] overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/gallery/"
              className="inline-flex items-center rounded-md border border-stone-300 px-6 py-3 font-semibold text-stone-700 hover:bg-white transition-colors"
            >
              Browse All
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Services
          </p>
          <h2 className="text-3xl font-bold text-stone-800">What We Do</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          <ServiceCard
            icon="/images/house.png"
            title="Day Care & Boarding"
            description="Dog/Cat Boarding & Day Care, Pet Photography"
          />
          <ServiceCard
            icon="/images/certificate.png"
            title="Grooming"
            description="Bath, Blow-dry, Brush out, Trimming, Nail clipping, Ear Cleaning"
          />
          <ServiceCard
            icon="/images/neuter.png"
            title="Sales"
            description="Veterinary Equipment Supply & Sales"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          <div className="rounded-xl bg-stone-900 text-white p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Price</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              Day Care: Dog $20/Full Day, Cat $15/Full Day
              <br />
              Boarding: Dog $30/night, Cat $20/night
              <br />
              Both: Small $25, Medium $35, Large $45
              <br />
              Nail Clipping: $10
            </p>
            <Link
              href="/pricing/"
              className="inline-flex rounded-md bg-amber-500 px-5 py-2.5 font-semibold hover:bg-amber-600 transition-colors"
            >
              More Price Details
            </Link>
          </div>
          <div className="rounded-xl bg-stone-900 text-white p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Form Download</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              Please complete the form below and bring with you on your
              first visit.
            </p>
            <a
              href="/files/bos-pet-service-store-requirements.pdf"
              className="inline-flex rounded-md bg-amber-500 px-5 py-2.5 font-semibold hover:bg-amber-600 transition-colors"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800">Partners</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 items-center">
            <PartnerCard
              href="https://brightonvet.ca/"
              image="/images/skagency-logo.png"
              name="Saskatoon Animal Control Agency"
            />
            <PartnerCard
              href="https://brightonvet.ca/"
              image="/images/brighton-veterinary-clinic.webp"
              name="Brighton Veterinary Clinic"
            />
            <PartnerCard
              href="https://brightonvet.ca/"
              image="/images/evergreen.jpg"
              name="Evergreen Veterinary Clinic"
            />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-stone-800 mb-3">
          Questions? We&rsquo;d love to hear from you.
        </h2>
        <p className="text-stone-600 mb-6">
          Call us at{" "}
          <a href={siteConfig.phoneHref} className="text-amber-600 font-semibold">
            {siteConfig.phone}
          </a>{" "}
          or send a message anytime.
        </p>
        <Link
          href="/contact-us/"
          className="inline-flex rounded-md bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition-colors"
        >
          Contact US
        </Link>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center rounded-xl border border-stone-200 p-8">
      <Image
        src={icon}
        alt=""
        width={56}
        height={56}
        className="mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-stone-800 mb-2">{title}</h3>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
}

function PartnerCard({
  href,
  image,
  name,
}: {
  href: string;
  image: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 text-center hover:shadow-md transition-shadow"
    >
      <div className="relative h-16 w-full">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <span className="font-semibold text-stone-700">{name}</span>
    </a>
  );
}
