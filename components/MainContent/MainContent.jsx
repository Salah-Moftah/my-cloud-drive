"use client";

import '@/public/css/mainContent.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { filterList } from "@/constants";
import {
  Loader,
  FilterDropdown,
  IconContainer,
  ToggleSwitch,
  ContentTable,
  ContentGrid,
} from "@/components";
import { useViewMode } from "@/contexts/ViewModeContext";
import { useFiles } from "@/contexts/GetFilesContext";

const MainContent = () => {
  const { files, loading } = useFiles();
  const { viewMode } = useViewMode();


  return (
    <>
      <div className="content-header pr-[20px]">
        <div className="flex items-center justify-between pb-[10px]">
          <div className="flex items-center text-[25px] gap-[8px] px-[20px] py-[8px] rounded-full cursor-pointer opacity-90 relative hover-overlay-bg overflow-hidden">
            <span className="my-drive-name">My Drive</span>
            <IoMdArrowDropdown />
          </div>

          <div className="flex items-center gap-[5px]">
            <ToggleSwitch />
            <IconContainer size="32px">
              <IoMdInformationCircleOutline size={20} />
            </IconContainer>
          </div>
        </div>

        <div className="flex items-center pl-[20px] gap-[10px]">
          {filterList.map((n) => (
            <FilterDropdown key={n.id} name={n.name} />
          ))}
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : files.length === 0 ? (
        <p>No files uploaded.</p>
      ) : viewMode === "list" ? (
        <ContentTable />
      ) : (
        <ContentGrid />
      )}
    </>
  );
};

export default MainContent;
