import Image from "next/image";
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
