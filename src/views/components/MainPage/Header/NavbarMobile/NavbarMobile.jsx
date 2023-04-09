import { VscMenu, VscSearch, VscChromeClose } from "react-icons/vsc";

import "./NavbarMobile.scss";
import { Link, useNavigate } from "react-router-dom";
import { ListElement } from "../ListElement/ListElement";
import { useEffect, useState } from "react";

export const NavbarMobile = ({ pathname }) => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate("/allRecipes");
  };

  const displayMenu = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };

  useEffect(() => {
    setIsMenuDisplayed(false);
  }, [pathname]);

  return (
    <nav className="navbar-mobile">
      {isMenuDisplayed ? (
        <VscChromeClose className="navbar-mobile__icon" onClick={displayMenu} />
      ) : (
        <VscMenu className="navbar-mobile__icon" onClick={displayMenu} />
      )}
      <ul
        className={"navbar-mobile__menu" + (isMenuDisplayed ? "--active" : "")}
      >
        <ListElement
          link="/allRecipes"
          text="All Recipes"
          className={
            pathname === "/allRecipes" ? "navbar-mobile__menu--active--li" : ""
          }
        />
        <ListElement
          link="/allRecipes/vegetarian"
          text="Vegetarian"
          className={
            pathname === "/allRecipes/vegetarian"
              ? "navbar-mobile__menu--active--li"
              : ""
          }
        />
        <ListElement
          link="/allRecipes/vegan"
          text="Vegan"
          className={
            pathname === "/allRecipes/vegan"
              ? "navbar-mobile__menu--active--li"
              : ""
          }
        />
        <ListElement
          link="/allRecipes/glutenFree"
          text="Gluten-Free"
          className={
            pathname === "/allRecipes/glutenFree"
              ? "navbar-mobile__menu--active--li"
              : ""
          }
        />
      </ul>
      <Link to="/" className="navbar-mobile__title">
        RECIPES
      </Link>
      <VscSearch className="navbar-mobile__icon" onClick={navigateToSearch} />
    </nav>
  );
};
