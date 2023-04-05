import { useScreenWidth } from "../../../../../hooks/useScreenWidth";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SearchNav } from "../SearchNav/SearchNav";
import "./NavbarMedia.scss";

export const NavbarMedia = () => {
  const screenWidth = useScreenWidth();
  return (
    <nav className="navbar-media">
      {screenWidth > 768 && <SearchNav />}
      <>
        <BsLinkedin className="navbar-media__link" />
        <BsGithub className="navbar-media__link " />
      </>
    </nav>
  );
};
