import Image from "next/image";
import Link from "next/link";

export default function SocialsLink({ socialLink }) {
  const { key, link, icon } = socialLink;

  if (!link) {
    return null;
  }
  return (
    <Link
      href={link}
      id={`${key}-link`}
      aria-label={`Link to ${key}`}
      className="relative flex aspect-square size-6 items-center justify-center transition duration-75 hover:scale-105 active:scale-95"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        src={icon.sourceURL}
        alt={icon.altText}
        fill
        className="object-contain"
      />
    </Link>
  );
}
