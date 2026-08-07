import Image from "next/image";
import Link from "next/link";
import CurveDivider from "@/components/CurveDivider";
import GalleryGrid from "@/components/GalleryGrid";
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
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-36 md:py-44 text-center text-white">
          <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-3">
            Professional pet service store
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Care a Pet</h1>
          <p className="max-w-3xl mx-auto text-stone-200 leading-relaxed text-2xl mb-8">
            From Boarding to Daycare, to the Grooming experience, there&rsquo;s
            simply no pet services provider in Warman &amp; Saskatoon like us:
            Pets on Home. We specialize in taking complete care of your pet,
            whether it&rsquo;s a simple nail trim visit or an extended stay for
            your furry friend with special needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us/"
              className="rounded-md bg-tan px-6 py-3 font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
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
        <CurveDivider
          fill="#232220"
          className="absolute inset-x-0 bottom-0 rotate-y-180"
        />
      </section>

      {/* About */}
      <section className="relative bg-charcoal pt-20 pb-28">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold tracking-wide uppercase text-sm mb-2">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-white">About Our Service</h2>
          </div>
          <div className="text-stone-300 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-x-8 text-lg">
            <div className="space-y-4">
              <p className="text-justify">
                Bo&rsquo;s Pet Store was opened in 2019 by Bo He. Everything you
                need for your pet, all in one place.
              </p>
              <p className="text-justify">
                Whether your pet needs a day of play, one night off or an
                extended vacation, their nails trimmed or a wash, Bo&rsquo;s Pet
                Service Store is here to make it happen. Our pet services
                facility in Warman &amp; Saskatoon is outfitted with everything
                your dog or cat could want from daycare entertainment, overnight
                boarding, and pet detailing services served up with care by our
                personable staff.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-justify">
                We understand that trusting others for pet services can be
                stressful and that&rsquo;s why we&rsquo;ve built our services
                from the ground up with both of you in mind. In everything we
                do, our goal is to create a relaxing and pleasant experience
                both for your pet as well as for yourself.
              </p>
              <p className="text-justify">
                Our Guest Service Attendants are very experienced and have been
                chosen to make sure your pet&rsquo;s getaway is all that it can
                be.
              </p>
            </div>
          </div>
        </div>
        {/* <CurveDivider fill="#f6ecdd" className="absolute inset-x-0 bottom-0" /> */}
      </section>

      {/* Gallery preview */}
      <section className="relative bg-white pt-20 pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <p className="text-clay font-semibold tracking-wide uppercase text-sm mb-2">
              Recently
            </p>
            <h2 className="text-3xl font-bold text-stone-800">Gallery</h2>
          </div>
          <GalleryGrid
            images={homeGalleryPreview}
            aspectClassName="aspect-[400/284]"
          />
          <div className="text-center mt-10">
            <Link
              href="/gallery/"
              className="inline-flex items-center rounded-md border border-stone-300 px-6 py-3 font-semibold text-stone-700 hover:bg-white transition-colors"
            >
              Browse All
            </Link>
          </div>
        </div>
        {/* <CurveDivider fill="#ffffff" className="absolute inset-x-0 bottom-0" /> */}
      </section>

      {/* Services */}
      <section className="relative bg-mist pt-20 pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-clay font-semibold tracking-wide uppercase text-sm mb-2">
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
            <div className="rounded-xl bg-charcoal text-white p-8 text-center">
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
                className="inline-flex rounded-md bg-tan px-5 py-2.5 font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
              >
                More Price Details
              </Link>
            </div>
            <div className="rounded-xl bg-charcoal text-white p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Form Download</h3>
              <p className="text-stone-300 leading-relaxed mb-6">
                Please complete the form below and bring with you on your first
                visit.
              </p>
              <a
                href="/files/bos-pet-service-store-requirements.pdf"
                className="inline-flex rounded-md bg-tan px-5 py-2.5 font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
        {/* <CurveDivider fill="#f6ecdd" className="absolute inset-x-0 bottom-0" /> */}
      </section>

      {/* Partners */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800">Partners</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 items-center">
            <PartnerCard
              href="https://saskatoonanimalcontrol.ca/"
              image="/images/skagency-logo.png"
              name="Saskatoon Animal Control Agency"
            />
            <PartnerCard
              href="https://brightonvet.ca/"
              image="/images/brighton-veterinary-clinic.webp"
              name="Brighton Veterinary Clinic"
            />
            <PartnerCard
              href="https://evergreenveterinaryclinic.net/"
              image="/images/evergreen.jpg"
              name="Evergreen Veterinary Clinic"
            />
          </div>
        </div>
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
    <div className="text-center rounded-xl border border-stone-200 p-8 hover:border-gold hover:shadow-md transition bg-white">
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
        <Image src={image} alt="" fill className="object-contain" />
      </div>
      <span className="font-semibold text-stone-700">{name}</span>
    </a>
  );
}
