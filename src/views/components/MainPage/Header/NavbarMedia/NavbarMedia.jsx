import { useScreenWidth } from "../../../../../hooks/useScreenWidth";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import "./NavbarMedia.scss";
import { Link } from "react-router-dom";

export const NavbarMedia = () => {
  const screenWidth = useScreenWidth();
  return (
    <nav className="navbar-media">
      {screenWidth > 768 && (
        <Link to="allRecipes" className="navbar-media__search">
          {" "}
          <VscSearch />
          <h6 className="navbar-media__search--text">SEARCH RECIPES</h6>
        </Link>
      )}
      <div className="navbar-media__links">
        <a
          href="https://github.com/imarti01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/isaura-mart%C3%AD-teixid%C3%B3-488737225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </nav>
  );
};
