import { NavbarDesktop, NavbarMobile, NavbarMedia } from "../../Header";
import { useScreenWidth } from "../../../../../hooks/useScreenWidth";

import "./HeaderContainer.scss";

export const HeaderContainer = () => {
  const screenWidth = useScreenWidth();

  return (
    <header className="header-container">
      <NavbarMedia />
      {screenWidth < 768 ? <NavbarMobile /> : <NavbarDesktop />}
    </header>
  );
};
