import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Welcome to our Pet Services Store`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Welcome to our Pet Services Store`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_CA",
    images: [
      {
        url: "/images/alvan-nee-1316903-unsplash-hero.jpg",
        width: 1920,
        height: 1282,
        alt: "A dog cared for at Bo's Pet Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Welcome to our Pet Services Store`,
    description: siteConfig.description,
    images: ["/images/alvan-nee-1316903-unsplash-hero.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteConfig.url}/images/bopet-logo.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressParts.streetAddress,
    addressLocality: siteConfig.addressParts.addressLocality,
    addressRegion: siteConfig.addressParts.addressRegion,
    addressCountry: siteConfig.addressParts.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-stone-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
