"use client";

import { IconContainer } from "@/components";
import { useSearchBar } from "@/contexts/SearchBarContext";
import { useClickOutSide } from "@/hooks/useClickOutside";
import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import { MdClear } from "react-icons/md";

const SearchInputField = () => {

  const inputRef = useRef(null);
  const { setIsFocused, query, setQuery } = useSearchBar();
  
  useClickOutSide(inputRef, () => setIsFocused(false));

  const handleClearQuery = () => {
    if (query.length > 0) {
      setQuery("");
      inputRef.current?.focus();
    }
  }

  return (
    <form className="flex items-center h-[46.5px]">
      <IconContainer outlineActive={true} className="mx-1.5 text-gray-3">
        <IoMdSearch size={24} />
      </IconContainer>

      <div className="flex-1">
        <input
          ref={inputRef}
          value={query}
          type="text"
          placeholder="Search in Drive"
          className="w-full h-full caret-gray-3 bg-transparent border-none outline-none placeholder:text-gray-3"
          name="search"
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setQuery(e.target.value)}
          
        />
      </div>

      <div className="flex items-center text-gray-3">
        {query.length > 0 && (
          <IconContainer className="mr-1.5" onClick={handleClearQuery}>
            <MdClear size={24} />
          </IconContainer>
        )}
        <IconContainer className="mr-1.5">
          <MdOutlineTune size={24} />
        </IconContainer>
      </div>
    </form>
  );
};

export default SearchInputField;
