/**
 * Build the Pricing Tier Card using the props sent from the Pricing section.
 *
 * Instructions:
 * - The Props include:
 *    - A `tier` object that contains:
 *       - `title`: The name of the pricing tier (e.g., "ForgeCLI Basic").
 *       - `price`: An object — likely containing properties for both `monthly` and `yearly` pricing (e.g., { monthly: "$9", yearly: "$99" }).
 *       - `overview`: A brief description of the tier's features or benefits (e.g., "Ideal for individuals or beginners...").
 *       - `inclusions`: An array of features or inclusions that come with the tier (e.g., ["Feature 1", "Feature 2"]).
 *       - `fimLink`: A link to more information or to sign up for the pricing plan.
 *    - `pricing`: A boolean that determines whether to show pricing as monthly (`false`) or yearly (`true`).
 *
 * - Use object destructuring to extract key data values from the `tier` object.
 * - Use a ternary operator to render the correct price based on the `pricing` state (monthly vs yearly).
 * - Use the `PrimaryButton` component to render the `fimLink` as a button (you will need to import the PrimaryButton component).
 * - Style the card and use Tailwind CSS for spacing, typography, and responsive design.
 * - Hint: If you are struggling with gradient boarders, check out the primary button component.
 *
 */

export default function PricingCard({ teir, pricing }) {
  return <div>Pricing Card</div>;
}
