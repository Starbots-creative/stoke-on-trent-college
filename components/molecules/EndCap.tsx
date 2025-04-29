"use client";
/**
 * Build the End Cap section using the provided endCapData.
 *
 * Instructions:
 * - `endCapData` includes:
 *    - A `logo` object with a `sourceURL` and `altText`.
 *    - A `socials` array where each item includes a `key`, `link`, and `icon`.
 * - Layout the elements for both desktop and mobile based on the Figma design.
 * - Use Array.map() to dynamically render each social icon as a link using the "../atoms/SocialsLink.tsx" component.
 * - Ensure that social links open in a new tab (`target="_blank"` and `rel="noopener noreferrer"`).
 *
 * - Add a thin scroll progress bar at the very bottom of the page.
 * - Create the Progress bar as a separate atom inside "../atoms/ProgressBar.tsx"
 *
 * - Use Tailwind CSS for layout, spacing, colors, and responsiveness.
 */

import endCapData from "@/data/endCap";

export default function EndCap() {
  // console.log(endCapData);

  return <div>End Cap</div>;
}
