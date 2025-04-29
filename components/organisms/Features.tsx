"use client";
/**
 * Build the "Features & Add Ons" section using a reusable FeaturesCard component (located at ./molecules/FeaturesCard.tsx).
 *
 * Instructions:
 * - `featuresData` contains a main title, an image, and an array of feature objects.
 * - Use object destructuring to access key data fields: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * - Render a list of feature buttons by mapping over the `features` array inside `featuresData`.
 * - Use the PrimaryButton component to render each button ("../atoms/PrimaryButton.tsx").
 * - Each button should correspond to a feature's title (e.g., "DeploymentCLI").
 * - Use React state (`useState`) to track the currently selected feature.
 * - When a button is clicked, update the state to display that feature's details in the FeaturesCard.
 * - Non-selected buttons should visually indicate they are inactive (pass a `setBack` prop).
 * - Render the selected feature's details (overview, use case, link) inside the FeaturesCard.
 * - Use the TextOnlyButton component for the link ("../atoms/TextOnlyButton.tsx").
 * - Style everything using Tailwind CSS.
 *
 * Example:
 * - When the "DeploymentCLI" button is clicked, display its overview, use case, and link in the FeaturesCard.
 */

import featuresData from "@/data/features";

import FeaturesCard from "../molecules/FeaturesCard";

export default function Features() {
  // console.log(featuresData);

  return <section>Features Section</section>;
}
