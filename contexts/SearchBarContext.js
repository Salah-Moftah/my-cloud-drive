"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SearchBarContext = createContext(null);

export const SearchBarProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <SearchBarContext.Provider
      value={{ isFocused, setIsFocused, query, setQuery, filteredFiles, setFiles, files }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};

export const useSearchBar = () => {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error("useSearchBar must be used within a SearchBarProvider");
  }
  return context;
};
