import Image from "next/image";
import CurveDivider from "@/components/CurveDivider";

export default function PageHero({
  eyebrow,
  title,
  image,
  imageAlt = "",
  imagePosition = "center",
  dividerTo,
}: {
  eyebrow?: string;
  title: string;
  /** Background photo path, e.g. "/images/example.jpg". */
  image: string;
  imageAlt?: string;
  /** CSS object-position for the background photo, e.g. "center 20%". */
  imagePosition?: string;
  /** Fill color of the section that follows, to blend the curve into it. */
  dividerTo?: string;
}) {
  return (
    <div className="relative flex h-72 sm:h-80 lg:h-96 items-center justify-center overflow-hidden bg-black text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        {eyebrow && (
          <p className="animate-fade-in-up text-gold font-semibold tracking-wide uppercase text-base mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-in-up-delay text-4xl sm:text-5xl lg:text-6xl font-bold">
          {title}
        </h1>
      </div>
      {dividerTo && (
        <CurveDivider fill={dividerTo} className="absolute inset-x-0 bottom-0" />
      )}
    </div>
  );
}
