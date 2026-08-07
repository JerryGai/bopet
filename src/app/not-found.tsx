import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="text-amber-500 font-bold text-6xl mb-4">404</p>
      <h1 className="text-2xl font-bold text-stone-800 mb-3">
        Page not found
      </h1>
      <p className="text-stone-600 mb-8">
        Sorry, we couldn&rsquo;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-md bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
