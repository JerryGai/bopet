import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/content/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "pricing",
    "contact-us",
    "requirements-form",
    "gallery",
    "blog",
    "vet-equipment",
    "foster-kennels",
  ].map((route) => ({
    url: `${siteConfig.url}/${route ? `${route}/` : ""}`,
    lastModified: new Date(),
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
