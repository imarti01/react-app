import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { SearchContainer } from "../SearchContainer/SearchContainer";
import { getRecipesByIngredients } from "../../../../../api/utils";
import Swal from "sweetalert2";
import { ResultsSearchContainer } from "../ResultsSearchContainer/ResultsSearchContainer";

export const LayoutSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const query = searchParams.get("q") ?? "";

  const submitSearch = (e) => {
    e.preventDefault();

    if (query.length > 2) {
      getRecipesByIngredients(query).then(({ data }) => setSearchResults(data));
    } else {
      Swal.fire({
        icon: "error",
        text: "The ingredient must contain at least 3 letters, TRY AGAIN!",
        iconColor: "#FFCB74",
        confirmButtonColor: "#FFCB74",
        color: "#062C30",
        background: "#F4F6FF",
      });
    }
  };

  return (
    <>
      <SearchContainer
        setSearchParams={setSearchParams}
        query={query}
        submitSearch={submitSearch}
      />
      {query.length > 0 ? (
        <ResultsSearchContainer searchResults={searchResults} />
      ) : (
        <Outlet />
      )}
    </>
  );
};
