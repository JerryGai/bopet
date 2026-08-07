import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog-posts";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
    ...(post.image ? { image: `${siteConfig.url}${post.image}` } : {}),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm text-stone-500 mb-2">
        <Link href="/blog/" className="hover:text-clay">
          Blog
        </Link>{" "}
        / {post.category}
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-3">
        {post.title}
      </h1>
      <p className="text-stone-500 mb-8">
        by {post.author} | {date} | {post.category}
      </p>

      {post.image && (
        <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <div className="max-w-none space-y-4 text-lg text-stone-700 leading-relaxed">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <Link
          href="/blog/"
          className="text-lg font-semibold text-clay hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
