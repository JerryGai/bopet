export const siteConfig = {
  name: "Bo's Pet Services",
  shortName: "Bo's Pet",
  description:
    "Professional pet boarding, daycare, grooming, and veterinary equipment sales in Warman & Saskatoon, SK.",
  url: "https://www.bopet.ca",
  phone: "306-241-8477",
  phoneHref: "tel:+13062418477",
  email: "bopetservice@gmail.com",
  emailHref: "mailto:bopetservice@gmail.com",
  address: "1211 Boucher Ave #2, Warman, SK",
  hours: [
    { label: "Monday – Friday", value: "9am – 5pm" },
    { label: "Weekends / Holidays", value: "By appointment" },
  ],
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.793507285617!2d-106.58797268398507!3d52.301602260143504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE4JzA1LjgiTiAxMDbCsDM1JzA4LjgiVw!5e0!3m2!1sen!2sca!4v1569612768692!5m2!1sen!2sca",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/requirements-form/", label: "Requirements" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/vet-equipment/", label: "VET Equipment" },
  { href: "/foster-kennels/", label: "Foster Kennels" },
  { href: "/blog/", label: "Blog" },
] as const;
