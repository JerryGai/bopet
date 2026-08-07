import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="text-clay font-bold text-7xl mb-4">404</p>
      <h1 className="text-3xl font-bold text-stone-800 mb-3">
        Page not found
      </h1>
      <p className="text-lg text-stone-600 mb-8">
        Sorry, we couldn&rsquo;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-md bg-tan px-6 py-3 text-lg font-semibold text-ink hover:bg-tan-dark hover:-translate-y-0.5 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
