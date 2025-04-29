"use client";

/**
 * Build the Hero Section using the provided heroData.
 *
 * Instructions:
 * - `heroData` includes a `title`, `subtitle`, and an `image` object.
 * - Layout:
 *    - Display the title and subtitle on the left side.
 *    - Display the image on the right side.
 *    - Stack vertically on mobile screens using Tailwind CSS.
 * - Use React `useEffect` and `useState` to create a "typing" animation effect for the title.
 * - Start with an empty string and gradually append one character at a time to simulate typing.
 * - Use `setTimeout` inside the `useEffect` to control the typing speed (e.g., 50-100ms per character).
 * - Bonus: After typing completes, you can leave it static or loop/reset if you want extra challenge.
 * - Bonus: Add the flashing cursor
 * - Use Tailwind CSS for layout, spacing, typography, and responsiveness.
 *
 * Notes:
 * - No need to animate the subtitle.
 */

import heroData from "@/data/hero";

export default function HeroSection() {
  // console.log(heroData);

  return <section>Hero Section</section>;
}
