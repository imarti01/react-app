import { Link } from "react-router-dom";
import { ListElement } from "../../../MainPage/Header/ListElement/ListElement";
import "./NavbarDesktop.scss";

export const NavbarDesktop = ({ pathname }) => {
  return (
    <nav className="navbar-desktop">
      <ul className="navbar-desktop__group">
        <ListElement
          link="/allRecipes"
          text="All Recipes"
          className={
            pathname === "/allRecipes" ? "navbar-desktop__group--active" : ""
          }
        />
        <ListElement
          link="/allRecipes/vegetarian"
          text="Vegetarian"
          className={
            pathname === "/allRecipes/vegetarian"
              ? "navbar-desktop__group--active"
              : ""
          }
        />
      </ul>
      <Link to="/" className="navbar-desktop__title">
        RECIPES
      </Link>
      <ul className="navbar-desktop__group">
        <ListElement
          link="/allRecipes/vegan"
          text="Vegan"
          className={
            pathname === "/allRecipes/vegan"
              ? "navbar-desktop__group--active"
              : ""
          }
        />
        <ListElement
          link="/allRecipes/glutenFree"
          text="Gluten-Free"
          className={
            pathname === "/allRecipes/glutenFree"
              ? "navbar-desktop__group--active"
              : ""
          }
        />
      </ul>
    </nav>
  );
};
