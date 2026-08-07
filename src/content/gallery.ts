export interface GalleryImage {
  src: string;
  alt: string;
}

/** Maps a gallery thumbnail path to its original full-resolution version. */
export function getFullImage(src: string): string {
  return src
    .replace("/images/", "/images/full/")
    .replace(/-400x(284|516)(\.\w+)$/, "-full$2");
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/jp-valery-1272795-unsplash-400x516.jpg", alt: "Happy dog at Bo's Pet Services" },
  { src: "/images/helena-lopes-1329839-unsplash-400x516.jpg", alt: "Cat resting comfortably" },
  { src: "/images/gallery-records-400x516.jpg", alt: "Pet records and check-in area" },
  { src: "/images/gallery-bathing-400x516.jpg", alt: "Dog bathing service" },
  { src: "/images/erik-mclean-1432546-unsplash-400x516.jpg", alt: "Dog enjoying daycare" },
  { src: "/images/kevin-laminto-621654-unsplash-400x516.jpg", alt: "Dog portrait" },
  { src: "/images/alvan-nee-1316903-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/justin-veenema-156591-unsplash-400x516.jpg", alt: "Dog playing" },
  { src: "/images/irem-turkkan-310552-unsplash-400x516.jpg", alt: "Cat close up" },
  { src: "/images/david-becker-683655-unsplash-400x516.jpg", alt: "Dog at boarding facility" },
  { src: "/images/karl-anderson-1142886-unsplash-400x516.jpg", alt: "Happy pet" },
  { src: "/images/andrew-pons-9713-unsplash-400x516.jpg", alt: "Dog resting" },
  { src: "/images/anusha-barwa-428445-unsplash-400x516.jpg", alt: "Dog portrait" },
  { src: "/images/maggielovesorbit-on-insta-1395546-unsplash-400x516.jpg", alt: "Groomed dog" },
  { src: "/images/pascal-beyer-1416300-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/knopka-ivy-1224181-unsplash-400x516.jpg", alt: "Cat playing" },
  { src: "/images/lydia-torrey-563689-unsplash-400x516.jpg", alt: "Dog close up" },
  { src: "/images/sam-manns-399879-unsplash-400x516.jpg", alt: "Dog on a walk" },
  { src: "/images/sarandy-westfall-603305-unsplash-400x516.jpg", alt: "Dog resting" },
  { src: "/images/matt-benson-1185886-unsplash-400x516.jpg", alt: "Cat portrait" },
  { src: "/images/jametlene-reskp-651413-unsplash-400x516.jpg", alt: "Dog looking up" },
  { src: "/images/gallery-frontdesk-b-400x516.jpg", alt: "Front desk at Bo's Pet Services" },
  { src: "/images/gallery-frontdesk-a-400x516.jpg", alt: "Reception area" },
  { src: "/images/austin-kirk-724999-unsplash-400x516.jpg", alt: "Dog portrait" },
  { src: "/images/rd-gray-1274273-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/mcdobbie-hu-420836-unsplash-400x516.jpg", alt: "Dog playing" },
  { src: "/images/gallery-grooming-c-400x516.jpg", alt: "Grooming session" },
  { src: "/images/jairo-alzate-45522-unsplash-400x516.jpg", alt: "Dog portrait" },
  { src: "/images/nathalie-spehner-1240876-unsplash-400x516.jpg", alt: "Dog resting" },
  { src: "/images/alexandru-sofronie-606013-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/gallery-storefront-a-400x516.jpg", alt: "Bo's Pet Services storefront" },
  { src: "/images/gallery-storefront-b-400x516.jpg", alt: "Bo's Pet Services entrance" },
  { src: "/images/jay-wennington-1297794-unsplash-400x516.jpg", alt: "Dog portrait" },
  { src: "/images/gallery-grooming-b-400x516.jpg", alt: "Grooming service" },
  { src: "/images/jamie-street-1218473-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/gallery-grooming-result-400x516.jpg", alt: "Freshly groomed pet" },
  { src: "/images/marion-michele-66097-unsplash-400x516.jpg", alt: "Dog resting" },
  { src: "/images/matthew-miles-1232263-unsplash-400x516.jpg", alt: "Dog portrait" },
  { src: "/images/ben-konfrst-483798-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/vincent-van-zalinge-639547-unsplash-400x516.jpg", alt: "Dog close up" },
  { src: "/images/IMG_0328-400x516.jpeg", alt: "Pet at Bo's Pet Services" },
  { src: "/images/matt-nelson-259365-unsplash-400x516.jpg", alt: "Dog outdoors" },
  { src: "/images/krista-mangulsone-53122-unsplash-400x516.jpg", alt: "Dog portrait" },
];
