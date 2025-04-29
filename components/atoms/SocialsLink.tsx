/**
 * SocialsLink Component
 *
 * A reusable component to render social media icons as links.
 *
 * Props:
 * - `socialLink` (object): An object that includes:
 *   - `key` (string): A unique identifier for the social platform (used for `id` and `aria-label`).
 *   - `link` (string): The external URL for the social profile.
 *   - `icon` (object): Contains:
 *     - `sourceURL` (string): The path to the icon image.
 *     - `altText` (string): Descriptive alt text for accessibility.
 *
 * Usage:
 * const socialLink = { key: "github", link: "https://github.com", icon: { sourceURL: "/icons/github.svg", altText: "GitHub" } } (or extract from props)
 * <SocialsLink socialLink={socialLink} />
 *
 */

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
