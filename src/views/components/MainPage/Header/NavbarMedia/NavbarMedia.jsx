import { useScreenWidth } from "../../../../../hooks/useScreenWidth";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import "./NavbarMedia.scss";

export const NavbarMedia = () => {
  const screenWidth = useScreenWidth();
  return (
    <nav className="navbar-media">
      {screenWidth > 768 && (
        <div className="navbar-media__search">
          {" "}
          <VscSearch />
          <h6 className="navbar-media__search--text">SEARCH RECIPES</h6>
        </div>
      )}
      <div className="navbar-media__links">
        <BsLinkedin />
        <BsGithub />
      </div>
    </nav>
  );
};
