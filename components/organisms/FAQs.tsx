/**
 * Build the FAQ section using the reusable Dropdown component (located at ../atoms/DropDown.tsx).
 *
 * Instructions:
 * - The provided `faqData` includes a title and an array of FAQ objects, each containing a `question` and an `answer`.
 * - Use object destructuring to access key data fields: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * - Use Array.map() inside your JSX to render each FAQ item using the Dropdown component.
 *   Example: return <Dropdown data={faq} />
 * - Style the section using Tailwind CSS.
 *
 * Notes:
 * - Remember to import the Dropdown component into this file before using it.
 */

import faqData from "@/data/faqs";

export default function FAQS() {
  //   console.log(faqData);

  return <section>FAQ&apos;s</section>;
}
