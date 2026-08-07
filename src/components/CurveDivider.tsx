/**
 * Diagonal section divider matching the original site's dividers: one side
 * rides high (fully into the next section's color), the other stays low, with
 * a soft curve between rather than a symmetric center peak. `fill` should be
 * the background color of the section that follows.
 */
export default function CurveDivider({
  fill,
  flip = false,
  className = "",
}: {
  fill: string;
  /** Mirror the diagonal so the high side is on the right instead of the left. */
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`w-full overflow-hidden leading-[0] ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[50px] w-full sm:h-[70px] lg:h-[100px] ${
          flip ? "-scale-x-100" : ""
        }`}
      >
        <path d="M0 0Q300 90 1440 96L1440 120L0 120Z" fill={fill} />
      </svg>
    </div>
  );
}
