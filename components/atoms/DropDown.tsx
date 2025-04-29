"use client";

/**
 * Build a reusable Dropdown component for the FAQs section.
 *
 * Instructions:
 * - Use a <button> element and the React useState hook to track the open/closed state of the dropdown.
 * - You will need to import useState
 * - Toggle the visibility of the answer based on the state value.
 * - Dynamically switch between a plus and minus icon using a ternary operator inside your JSX:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
 * - Render the PlusIcon and MinusIcon components like regular React components (e.g., <PlusIcon />).
 *   Wrap them in a <div> and style their size and alignment using Tailwind CSS.
 * - Style the entire dropdown component with Tailwind CSS.
 *
 * Notes:
 * - Remember to import the Dropdown component wherever you intend to use it.
 */

import MinusIcon from "@/public/icons/minusIcon.svg";
import PlusIcon from "@/public/icons/plusIcon.svg";

export default function DropDown({ faq }) {
  //manage state

  //render component
  return <div>DropDown</div>;
}
