/**
 * NavLink Component
 *
 * A reusable navigation link styled with a gradient hover effect and subtle scaling animation.
 *
 * Props:
 * - `link` (string): The URL or hash to navigate to.
 * - `label` (string): The visible text for the link and also used for accessibility labeling and element ID.
 *
 * Usage:
 * <NavLink link="/#features" label="Features" />
 *
 */

import Link from "next/link";

export default function NavLink({ link, label }) {
  return (
    <Link
      href={link}
      id={label}
      aria-label={`Link to ${label}`}
      className="from-forge-gradient-from to-forge-gradient-to flex w-fit items-center justify-center bg-gradient-to-r bg-clip-text font-light text-white transition-all duration-75 hover:scale-105 hover:font-semibold hover:text-transparent active:scale-95"
    >
      {label}
    </Link>
  );
}
