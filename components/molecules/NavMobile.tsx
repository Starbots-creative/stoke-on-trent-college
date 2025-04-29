"use client";

/**
 * Build the Mobile Navigation using the provided links and logo.
 *
 * Instructions:
 * - Render the `logo` on the left side and a hamburger/close button on the right.
 * - Use React `useState` to manage the open/closed state of the mobile menu.
 * - When the menu is closed, show the Hamburger icon; when open, show the CloseMenu icon.
 * - Use a ternary operator inside your JSX to toggle between the two icons.
 * - When the menu is open, show a full screen element to display the navigation links .
 * - Use Tailwind CSS to:
 *    - Make this nav visible only on mobile.
 *    - Style the dropdown menu (background color, spacing, etc.).
 *    - Add transition effects for opening and closing if you want bonus polish.
 *
 * Notes:
 * - Each navigation link should use the NavLink component from "../atoms/NavLink.tsx".
 * - Ensure the menu closes when a navigation link is clicked.
 */

import CloseMenu from "@/public/icons/closeIcon.svg";
import Hamburger from "@/public/icons/hamburgerIcon.svg";

export default function MobileNavigation({ links, logo }) {
  //console.log(links, logo);

  return <div>MobileNav</div>;
}
