import { VscSearch } from "react-icons/vsc";
import "./SearchContainer.scss";

export const SearchContainer = ({ setSearchParams, query, submitSearch }) => {
  const handleSearch = (e) => {
    setSearchParams({ q: e.target.value });
  };

  return (
    <div className="search-container">
      <form
        className="search-container__form"
        onSubmit={(e) => submitSearch(e)}
      >
        <input
          type="search"
          value={query}
          className="search-container__form--input"
          placeholder="SEARCH A RECIPE"
          onChange={(e) => handleSearch(e)}
        />
      </form>
      <VscSearch
        className="search-container__icon"
        onClick={(e) => submitSearch(e)}
      />
    </div>
  );
};
