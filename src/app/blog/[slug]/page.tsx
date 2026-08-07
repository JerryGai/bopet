import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog-posts";

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

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-stone-500 mb-2">
        <Link href="/blog/" className="hover:text-amber-600">
          Blog
        </Link>{" "}
        / {post.category}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
        {post.title}
      </h1>
      <p className="text-sm text-stone-500 mb-8">
        by {post.author} | {date} | {post.category}
      </p>

      {post.image && (
        <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <div className="prose prose-stone max-w-none space-y-4 text-stone-700 leading-relaxed">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <Link
          href="/blog/"
          className="text-sm font-semibold text-amber-600 hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
