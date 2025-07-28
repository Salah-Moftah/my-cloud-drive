"use client";

import { useFiles } from "@/contexts/GetFilesContext";
import { useSortData } from "@/hooks/useSortData";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdFolderShared } from "react-icons/md";

const ContentGrid = () => {
  const { files } = useFiles();

  const { sortedData } = useSortData(files);

  return (
    <div className="mt-[30px] grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px] p-[20px]">
      {sortedData.map((file) => (
        <div
          className="flex justify-between items-center bg-gray-1 rounded-[10px] p-[10px] transition-all duration-200 cursor-default overflow-hidden hover-overlay-bg relative"
          key={file._id}
        >
          <span className="flex items-center gap-[14px] text-[14px] text-primary overflow-hidden text-ellipsis whitespace-nowrap">
            <div>
              <MdFolderShared className="w-[22px] h-[22px]" />
            </div>
            <div>
              <h4 className="m-0 mb-[5px]">{file.name}</h4>
              <p className="m-0 text-[13px]">In Shared with me</p>
            </div>
          </span>
          <BiDotsVerticalRounded className="text-[20px] text-[#666] cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
