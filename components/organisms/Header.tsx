import navigationData from "@/data/navigation";

import DesktopNavigation from "../molecules/NavDesktop";
import MobileNavigation from "../molecules/NavMobile";

export default function Header() {
  return (
    <nav>
      <DesktopNavigation data={navigationData} />
      <MobileNavigation data={navigationData} />
    </nav>
  );
}
