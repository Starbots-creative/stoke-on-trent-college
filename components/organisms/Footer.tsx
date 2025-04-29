"use client";

/**
 * Build the Footer section using the provided footerData
 *
 * Instructions:
 * - `footerData` includes four groups of navigation links: quickLinks, supportLinks, companyLinks, and legalLinks.
 * - Use Array.map() to dynamically render each set of links into separate sections.
 * - Each link object has a `label` and a `link` property.
 * - Import and use the NavLink Component to render the Links "../atoms/NavLink.tsx"
 * - Group and style the links using Tailwind CSS to match the footer layout.
 *
 * Newsletter Signup:
 * - The `footerData` also contains a `newsletter` object with a title, description, and button text.
 * - Initially show the newsletter's title, description, and a "Subscribe" button.
 * - When the Subscribe button is clicked, switch to an email input field and a new Submit button.
 * - Use the React `useState` hook to control whether the form is in "button" or "input" mode.
 * - Use the state and ternary oporator to conditionally render the correct peice.
 * - For the buttons you can import "../atoms/PrimaryButton.tsx" and use type="button"
 * - Style the newsletter form using Tailwind CSS to match the figma.
 * - * Dont worry about form handling *
 *
 * EndCap:
 * - The End Cap will be taken care of by another member of the team.
 *
 */

import footerData from "@/data/footer";

import EndCap from "../molecules/EndCap";

export default function Footer() {
  // console.log(footerData);

  return (
    <footer>
      <div>Footer</div>
      <EndCap />
    </footer>
  );
}
