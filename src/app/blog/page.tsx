import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { getAllPosts } from "@/content/blog-posts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, offers, and updates from Bo's Pet Services.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero eyebrow="Our Service Blog" title="Blog" />

      <section className="mx-auto max-w-4xl px-4 py-16 space-y-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-stone-200 overflow-hidden sm:flex"
          >
            {post.image && (
              <div className="relative sm:w-64 aspect-[4/3] sm:aspect-auto shrink-0">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">
                {post.category}
              </p>
              <h2 className="text-xl font-bold text-stone-800 mb-2">
                <Link href={`/blog/${post.slug}/`} className="hover:text-amber-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-stone-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="text-sm font-semibold text-amber-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-xl px-4">
          <div className="text-center mb-6">
            <p className="mb-1 text-stone-700">Hi there!</p>
            <p className="text-stone-600">
              If you have any further questions, please don&rsquo;t hesitate
              to contact me. Please feel free to call me on ({siteConfig.phone})
              or contact by ({siteConfig.email}), if you require any further
              information.
            </p>
            <p className="text-stone-700 mt-1">Yours, BO</p>
          </div>
          <ContactForm formName="contact" title="Contact US" />
        </div>
      </section>
    </>
  );
}
