"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FilterDropdown, GhostButton } from "@/components";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { filterList } from "@/constants";
import { useSearchBar } from "@/contexts/SearchBarContext";

const SearchResultsPanel = () => {
  const { filteredFiles, setFiles } = useSearchBar();

  const fetchFiles = async () => {
    const response = await fetch("/api/file");
    const data = await response.json();
    setFiles(data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="w-full relative text-left z-[9999] border-0 bg-white">
      <div className="flex items-center pl-2 gap-[8px] mb-2 mt-3">
        {filterList
          .map((n) => <FilterDropdown key={n.id} name={n.name} />)
          .slice(0, 3)}
      </div>
      {filteredFiles.length > 0 ? (
        <div className="w-full px-2 pt-2 border-t-[#ccc] border-solid border-t-[1px]">
          {filteredFiles
            .map((file, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-1.5 rounded-2 overflow-hidden relative hover-overlay-bg"
              >
                <div className="w-[14px] h-[14px] relative mr-4">
                  <Image src="/imgs/pdf.png" alt="" fill />
                </div>
                <div className="flex-1 flex justify-center flex-col pr-3">
                  <h4 className="font-medium m-0 text-[15px] whitespace-nowrap">
                    {file.name}
                  </h4>
                  <span className="text-text-primary text-[12.5px] opacity-70 whitespace-nowrap">
                    salah moftah
                  </span>
                </div>
                <div className="text-xs">Jun 20</div>
              </div>
            ))
            .slice(0, 5)}
        </div>
      ) : (
        <p className="px-2.5 pt-2.5 text-[14px] text-gray-6">No results items match your search.</p>
      )}
      <div className="full flex justify-between items-center px-3 pb-1.5 pt-2">
        <GhostButton>Advanced search</GhostButton>
        <GhostButton>
          <div className="flex items-center gap-1.5 pl-2">
            <MdOutlineSubdirectoryArrowLeft size={18} />
            <span>All results</span>
          </div>
        </GhostButton>
      </div>
    </div>
  );
};

export default SearchResultsPanel;
