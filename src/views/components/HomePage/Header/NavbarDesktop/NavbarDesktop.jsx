import { ListElement } from "../ListElement/ListElement";
import "./NavbarDesktop.scss";

export const NavbarDesktop = () => {
  return (
    <nav className="navbar-desktop">
      <ul>
        <ListElement link="/allRecipes" text="All Recipes" />
        <ListElement link="/vegan" text="Vegan" />
        <ListElement link="/glutenFree" text="Gluten-Free" />
      </ul>
      <h2>RECIPES</h2>
      <ul>
        <ListElement link="/deserts" text="Deserts" />
        <ListElement link="/salads" text="Salads" />
        <ListElement link="/pasta" text="Pasta" />
      </ul>
    </nav>
  );
};
