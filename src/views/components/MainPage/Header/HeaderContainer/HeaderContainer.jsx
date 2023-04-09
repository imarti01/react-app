import { NavbarDesktop, NavbarMobile, NavbarMedia } from "../../Header";
import { useScreenWidth } from "../../../../../hooks/useScreenWidth";

import "./HeaderContainer.scss";
import { useLocation } from "react-router-dom";

export const HeaderContainer = () => {
  const screenWidth = useScreenWidth();
  const { pathname } = useLocation();

  return (
    <header className="header-container">
      <NavbarMedia />
      {screenWidth < 768 ? (
        <NavbarMobile pathname={pathname} />
      ) : (
        <NavbarDesktop pathname={pathname} />
      )}
    </header>
  );
};
