/**
 * Build the Contact Form using the provided contactFormData.
 *
 * Instructions:
 * - `contactFormData` contains:
 *    - A `title` for the contact form.
 *    - An`image` object with `sourceURL` (image URL) and `altText` (image alt text).
 *
 * - The contact form includes the following fields:
 *    - `Full Name` (text input field)
 *    - `Company` (text input field)
 *    - `Email` (email input field)
 *    - `Phone` (text input field)
 *    - `Message` (textarea for the user's message).
 *
 * - Create a reusable `Input` component located at `../atoms/Input.tsx` to render the fields.
 * - More information has been provided in the input component
 * - Track each fields value using React's `useState` hook.
 *
 * - Create a `handleInputChange` function to update the corresponding form field in the state whenever the user types into a field.
 *
 * - Include a submit button that triggers the `handleSubmit` function when clicked (Import and use the Primary Button Component) .
 *    - The submit function should prevent the default form submission and log the current form data to the console.
 *
 * - Style the form using Tailwind CSS for layout, spacing, and responsiveness.
 *
 */

import contactData from "@/data/contact";

export default function SimpleContactForm() {
  // console.log(contactData);

  return <section>Contact Form</section>;
}
