export default function PageHero({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="bg-stone-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        {eyebrow && (
          <p className="text-amber-400 font-semibold tracking-wide uppercase text-sm mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
