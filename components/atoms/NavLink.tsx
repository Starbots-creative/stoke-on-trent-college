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
