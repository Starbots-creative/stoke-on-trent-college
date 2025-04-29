/**
 * Build a reusable Input component for rendering input fields in contact forms.
 *
 * Instructions:
 * - This component should be used to render various types of form inputs, such as `text`, `email` and 'textarea'.
 * - The component should receive the following props:
 *    - `label`: The label for the input field (e.g., "Name", "Email").
 *    - `type`: The type of the input field (e.g., "text", "email").
 *    - `name`: The name attribute of the input field. This is important for form data handling.
 *    - `value`: The current value of the input field, controlled by React's `useState`.
 *    - `onChange`: A function that handles changes to the input field (updating the state).
 *    - `textArea`: A boolean that states if the input is text area or a standard input field.
 *
 *
 * - The component should remder a label and an input field, along with basic styling using Tailwind CSS.
 * - Hint - If you struggle with gradient borders check out the Primary Button Component
 * - Use a ternary operator in the JSX to determine whether to render an input or a text area - based on textArea true/false
 * - Ensure the feild adapts well to different screen sizes.
 * - For Bonus Props try adding accessibility and keyboard navigation styles
 *
 */

export default function InputField({ ...addPropsHere }) {
  return <div>Input Field</div>;
}
