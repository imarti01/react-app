import { VscMenu, VscSearch } from "react-icons/vsc";

import "./NavbarMobile.scss";

export const NavbarMobile = () => {
  return (
    <nav className="navbar-mobile">
      <VscMenu />
      <h3 className="navbar-mobile__title">RECIPES</h3>
      <VscSearch />
    </nav>
  );
};
