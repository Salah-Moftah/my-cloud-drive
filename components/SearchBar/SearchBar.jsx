"use client";

import { SearchInputField, SearchResultsPanel } from "@/components";
import { useSearchBar } from "@/contexts/SearchBarContext";

const SearchBar = () => {
  const { isFocused, query } = useSearchBar();

  return (
    <div
      className={`${query.length > 0 && "shadow-5"} ${
        isFocused ? "bg-white shadow-1" : "bg-gray-5"
      } max-w-[720px] relative min-w-[450px] border-[1px] mx-0 border-solid border-transparent rounded-6 overflow-hidden`}
    >
      <div className="">
        <SearchInputField />
        {isFocused && query.trim() !== "" && <SearchResultsPanel />}
      </div>
    </div>
  );
};

export default SearchBar;
