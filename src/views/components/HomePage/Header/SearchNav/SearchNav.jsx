import { VscSearch } from "react-icons/vsc";
import "./SearchNav.scss";
import { useState } from "react";

export const SearchNav = () => {
  const [showInputSearch, setShowInputSearch] = useState(false);
  const toggleShowInput = () => {
    setShowInputSearch((prev) => !prev);
  };
  return (
    <div className="search-nav">
      <VscSearch className="search-nav__icon" />
      <h5
        onClick={toggleShowInput}
        className={"search-nav__search" + (showInputSearch ? "" : "--active")}
      >
        SEARCH
      </h5>
      <input
        type="search"
        className={"search-nav__input" + (showInputSearch ? "--active" : "")}
      />
    </div>
  );
};
