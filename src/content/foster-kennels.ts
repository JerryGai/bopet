export interface FosterKennel {
  id: string;
  name: string;
  images: string[];
  dimensions: string[];
  warranty: string;
  features: string[];
}

export const fosterKennels: FosterKennel[] = [
  {
    id: "k-01",
    name: "Dog Foster Kennel (K-01)",
    images: [
      "/images/Picture1-300x98.jpg",
      "/images/Picture1-250x300.png",
      "/images/Picture2-300x283.jpg",
      "/images/Picture3-246x300.jpg",
    ],
    dimensions: [
      'Upper Cages Dimension: L 24" × H 24" × D 27.5"',
      'Lower Cages Dimension: L 24" × H 32" × D 27.5"',
    ],
    warranty: "Free returns/replacement within 30 days.",
    features: [
      "Crafted from Type 304 Stainless Steel.",
      "There is an optional divider that allows you to transform two smaller cages into one bigger cage.",
      "Sound-dampening patches are added to minimize noise.",
      "Movable braking wheels at the bottom. High load rating, quiet and easy to move.",
      "Free of dead corners inside the kennel, manufactured with full rounded corners.",
      "Sound-dampening patches keep noise down.",
    ],
  },
  {
    id: "k-02",
    name: "Dog Foster Kennel (K-02)",
    images: ["/images/Picture4-240x300.jpg"],
    dimensions: [
      'Upper Cages Dimension: L 24" × H 28" × D 27.5"',
      'Lower Cages Dimension: L 24" × H 28" × D 27.5"',
    ],
    warranty: "Free returns within 30 days.",
    features: [
      "Crafted from Type 304 Stainless Steel.",
      "The cage has a reasonable structure, beautiful appearance, super pressure bearing and strong and durable.",
      "Each floor has a separate seating area and activity area.",
      "The cage door lock uses a unique sliding silent design, which is automatically locked, convenient and safe.",
      "There is no dead angle design in the cage, made with full rounded corners.",
      "High-strength acrylic partition plate design in the middle of the cage for easy cleaning.",
      "The bottom is made of 4 high-mute universal wheels, which are wear-resistant and easy to shift and fix.",
    ],
  },
  {
    id: "k-03",
    name: "Luxury Cat Foster Kennel (K-03)",
    images: ["/images/Picture5-300x217.jpg", "/images/Picture6-268x300.jpg"],
    dimensions: [
      'Upper Cages Dimension: L 62" × H 32" × D 25.5"',
      'Lower Cages Dimension: L 62" × H 32" × D 25.5"',
    ],
    warranty: "Free returns within 30 days.",
    features: [
      "Crafted from Type 304 Stainless Steel.",
      "The cat cage has a reasonable structure, beautiful appearance, super pressure bearing and strong and durable.",
      "Each floor has a separate seating area and activity area.",
      "The cage door lock uses a unique sliding silent design, which is automatically locked, convenient and safe.",
      "There is no dead angle design in the cage, made with full rounded corners.",
      "High-strength acrylic partition plate design in the middle of the cage for easy cleaning.",
      "The bottom is made of 4 high-mute universal wheels, which are wear-resistant and easy to shift and fix.",
    ],
  },
  {
    id: "k-04",
    name: "High-grade Dog Foster Kennel (K-04)",
    images: ["/images/Picture7-295x300.png"],
    dimensions: [
      'Upper Cages Dimension: L 20" × H 24" × D 27.5"',
      'Lower Cages Dimension: L 59" × H 32" × D 27.5"',
    ],
    warranty: "Free returns within 30 days.",
    features: [
      "Crafted from Type 304 Stainless Steel.",
      "The dog cage has a reasonable structure, beautiful appearance, super pressure bearing and strong and durable.",
      "There is an optional divider that allows you to transform two smaller cages into one bigger cage.",
      "The cage door lock uses a unique sliding silent design, which is automatically locked, convenient and safe.",
      "There is no dead angle design in the cage, made with full rounded corners.",
      "High-strength acrylic partition plate design in the middle of the cage for easy cleaning.",
      "The bottom is made of 4 high-mute universal wheels, which are wear-resistant and easy to shift and fix.",
      "Activity net plate. Can customize as needed.",
    ],
  },
  {
    id: "t-01",
    name: "Lift Surgical Auxiliary Table (T-01)",
    images: ["/images/Picture8-287x300.png"],
    dimensions: [],
    warranty: "Free returns within 30 days.",
    features: [
      "Crafted from Type 304 Stainless Steel.",
      "Lift function with hand lift knob.",
      "Equipped with rolling universal brake wheels, easy to use and clean.",
      "Simple, practical, and anti-rust.",
    ],
  },
];
