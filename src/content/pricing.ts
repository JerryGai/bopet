export const daycareRates = {
  headers: ["", "One Dog", "Two Dogs", "Three Dogs"],
  rows: [
    { label: "Full Day", values: ["$23", "$46", "$69"] },
    { label: "1/2 Day", values: ["$20", "$40", "$60"] },
    { label: "5 Days Pass **", values: ["$115", "$185", "$275"] },
    { label: "10 Days Pass **", values: ["$220", "$350", "$510"] },
    { label: "10 – 1/2 Days Pass **", values: ["$120", "$220", "$330"] },
    { label: "20 Days Pass * **", values: ["$390", "$700", "$1050"] },
  ],
  notes: [
    "One Cat: $15/Day Plus GST",
    "* For the 20 days pass only, your dog must attend a minimum of 2 times per week",
    "** Please note that all Day Passes Packages are non-refundable",
  ],
};

export const boardingInfo = {
  intro:
    "The following prices apply per suite (from the same household sharing the same suite)",
  rows: [
    { label: "1 dog", price: "$40/day plus TAX" },
    { label: "2 dogs", price: "$60/day plus TAX" },
    { label: "3 dogs", price: "$95/day plus TAX" },
    { label: "1 cat", price: "$20/day plus TAX" },
  ],
  notes: [
    "Check Out Time – 1:00 pm. All pets will be charged for the daycare fee if picked up after checkout time.",
    "* This is the price for a work day. Saturday or Sunday is $45/per day plus Tax.",
  ],
  discounts: [
    { range: "10 to 19 days", discount: "10% discount" },
    { range: "20 to 29 days", discount: "15% discount" },
    { range: "30+ days", discount: "20% discount" },
  ],
  discountNote:
    "This discount applies to dogs only. It does not apply to cats.",
};

interface GroomingSection {
  title: string;
  description: string;
  headers?: string[];
  rows?: { label: string; values: string[] }[];
  notes?: string[];
  note?: string;
  extras?: { label: string; price: string }[];
}

export const groomingSections: GroomingSection[] = [
  {
    title: "Bath & Tidy",
    description:
      "Service includes: the bath, blow dry, brush out, trimming (face, bum, paws etc.), nail clipping, and ear cleaning.",
    headers: ["Dog Size", "Small", "Medium", "Large", "X-Large"],
    rows: [
      { label: "Short Coat", values: ["$50+", "$60+", "$85+", "$120+"] },
      { label: "Medium Coat", values: ["$60+", "$70+", "$95+", "$140+"] },
      { label: "Long Coat", values: ["$70+", "$80+", "$120+", "$180+"] },
    ],
    notes: [
      "Cat $60+ ~ 65+ Plus GST",
      "Additional costs may be incurred depending on the condition of the coat and difficulty of dog.",
    ],
  },
  {
    title: "Full Grooming",
    description:
      "Service includes: the bath, blow dry, brush out, nail clipping, ear cleaning and a full body haircut.",
    note: "Pricing varies with the condition of coat, breed and cut type, please inquire for pricing.",
    extras: [
      { label: "Nail Clipping", price: "$12 – $18" },
      { label: "Anal Glands", price: "$15" },
    ],
  },
];

export const bathSection = {
  title: "Bath & Tidy",
  description:
    "Service includes: the bath, blow dry, brush out, trimming (face, bum, paws etc.), nail clipping, and ear cleaning.",
  headers: ["Dog Size", "Small", "Medium", "Large", "X-Large"],
  rows: [
    { label: "Small", values: ["$55~75+", "$65~75+", "$85~95+", "$120~150+"] },
  ],
  notes: [
    "Additional costs may be incurred depending on the condition of the difficulty of dog.",
    "Service includes: the bath, blow dry, brush out.",
  ],
};
