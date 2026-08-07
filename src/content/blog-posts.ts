export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO date
  author: string;
  category: string;
  excerpt: string;
  image?: string;
  body: string[]; // paragraphs
}

export const blogPosts: BlogPost[] = [
  {
    slug: "annual-celebration",
    title: "Annual Celebration!",
    date: "2020-10-07",
    author: "Jerry",
    category: "Uncategorized",
    excerpt: "Get $10 off on grooming appointment this October!!",
    image: "/images/IMG_4343-1-1024x607.jpg",
    body: ["Get $10 off on grooming appointment this October!!"],
  },
  {
    slug: "hot-hiring",
    title: "Hot hiring!",
    date: "2019-10-05",
    author: "Jerry",
    category: "career",
    excerpt:
      "Experienced Pet Groomer in a new pet service business in Warman. Please Email resumes to service@bopet.ca.",
    body: [
      "Experienced Pet Groomer in a new pet service business in Warman. Please Email resumes to service@bopet.ca.",
      "For more contact information please visit our Contact Page. Thank you.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
