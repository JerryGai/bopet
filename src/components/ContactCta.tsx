import Link from "next/link";

export default function ContactCta({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-2">
        {heading}
      </h2>
      <p className="text-lg text-stone-600 mb-6">{description}</p>
      <Link
        href="/contact-us/"
        className="inline-flex rounded-md bg-tan px-6 py-3 text-lg font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
      >
        Contact Us
      </Link>
    </div>
  );
}
