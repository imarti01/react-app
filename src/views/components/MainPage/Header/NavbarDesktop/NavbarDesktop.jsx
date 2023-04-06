import { ListElement } from "../../../MainPage/Header/ListElement/ListElement";
import "./NavbarDesktop.scss";

export const NavbarDesktop = () => {
  return (
    <nav className="navbar-desktop">
      <ul className="navbar-desktop__group">
        <ListElement link="/allRecipes" text="All Recipes" />
        <ListElement link="/healthy" text="Healthy" />
        <ListElement link="/popular" text="Popular" />
      </ul>
      <h2 className="navbar-desktop__title">RECIPES</h2>
      <ul className="navbar-desktop__group">
        <ListElement link="/glutenFree" text="Gluten-Free" />
        <ListElement link="/vegetarian" text="Vegetarian" />
        <ListElement link="/vegan" text="Vegan" />
      </ul>
    </nav>
  );
};
