/**
 * Build the Navigation section using the provided navigationData.
 *
 * Instructions:
 * - `navigationData` includes an array of navigation links and the company logos.
 * - The data has already been destructured and passed as props to the Desktop and Mobile navigation components.
 * - Complete the navigation by building both the Desktop and Mobile Navigation layouts separately.
 *
 */

import navigationData from "@/data/navigation";

import DesktopNavigation from "../molecules/NavDesktop";
import MobileNavigation from "../molecules/NavMobile";

export default function Header() {
  const { links, mobileLogo, desktopLogo } = navigationData;
  return (
    <nav>
      <DesktopNavigation links={links} logo={desktopLogo} />
      <MobileNavigation links={links} logo={mobileLogo} />
    </nav>
  );
}
