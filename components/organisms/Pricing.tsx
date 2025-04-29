"use client";

/**
 * Build the Pricing section using the provided pricingData.
 *
 * Instructions:
 * - `pricingData` includes:
 *    - A `title` for the section.
 *    - A `tiers` array where each tier contains:
 *       - `title`: The name of the pricing tier.
 *       - `price`: An object — likely containing properties for both `monthly` and `yearly` pricing (e.g., { monthly: "$9", yearly: "$99" }).
 *       - `overview`: A brief description of the tier's features or benefits.
 *       - `inclusions`: An array of features or inclusions that come with the tier (e.g., "Feature 1", "Feature 2").
 *       - `fimLink`: A link to more information or sign up for the pricing plan.
 *
 * - Use React's `useState` hook to create a state variable that toggles between "monthly" and "yearly" pricing.
 *   Use the imported Toggle switch and Pass the state and the set state callback function.
 *
 * Layout:
 * - Render the main section title (i.e., `pricingData.title`) at the top of the section.
 * - Create a reusable `PricingCard` component located at "../molecules/PricingCard.tsx".
 *    - This component should accept `teir` and the pricing state as props, and render each pricing tier's card.
 * - Use `Array.map()` to loop over the `pricingData.tiers` array and render a `PricingCard` for each tier.
 *
 * General:
 * - Ensure that the toggle state (`showYearly`) properly updates the displayed price based on the selected option.
 * - The `PricingCard` component should handle the rendering of each tier, and the main `Pricing` component should handle the toggle logic and section layout.
 * - The `Pricing` section should be responsive, adjusting the layout for mobile and desktop devices (using Tailwind's responsive classes).
 * - Ensure that when a user toggles between "Monthly" and "Yearly", the pricing updates dynamically without reloading the page.
 */

import pricingData from "@/data/pricing";

import PricingCard from "../molecules/PricingCard";

export default function Pricing() {
  //console.log(pricingData);

  return <section>Pricing</section>;
}
