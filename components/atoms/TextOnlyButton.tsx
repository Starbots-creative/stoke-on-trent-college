/**
 * TextOnlyButton Component
 *
 * A reusable text-only link button with a gradient style and an arrow icon.
 *
 * Props:
 * - `link` (string): The URL the button should navigate to.
 * - `label` (string): The text label displayed on the button (also used for accessibility).
 *
 * Usage:
 * <TextOnlyButton label="Learn More" link="https://example.com" />
 *
 */

import Link from "next/link";

import Arrow from "@/public/icons/Arrow.svg";
export default function TextOnlyButton({ link, label }) {
  if (!link) {
    return null;
  }
  return (
    <Link
      href={link}
      id={`${label}-link`}
      aria-label={`Link to ${label}`}
      className="from-forge-gradient-from to-forge-gradient-to flex w-fit items-center justify-center bg-gradient-to-r bg-clip-text text-2xl font-semibold text-transparent transition duration-75 hover:scale-105 active:scale-95"
    >
      {label}
      <span className="ml-2">
        <Arrow />
      </span>
    </Link>
  );
}
