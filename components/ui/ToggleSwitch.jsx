"use client";

import { IoMdCheckmark } from "react-icons/io";
import { PiListBold } from "react-icons/pi";
import { useViewMode } from "@/contexts/ViewModeContext";
import { MdOutlineGridView } from "react-icons/md";


const ToggleSwitch = () => {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="flex border border-gray-3 rounded-[20px] overflow-hidden bg-[#f8f9fa]">
      <button
        className={`flex items-center justify-center w-[50px] h-[30px] border-none cursor-pointer
          relative transition-all duration-300 ease-in-out border-r border-gray-3 ${
          viewMode === "list" ? "bg-brand-secondary" : "bg-transparent"
        }`}
        onClick={() => setViewMode("list")}
      >
        <div className="flex">
          {
            viewMode === "list" && (
              <IoMdCheckmark size={19} />
            )
          }
          <PiListBold size={19} />
        </div>
      </button>
      <button
        className={`flex items-center justify-center w-[50px] h-[30px] border-l border-gray-3  cursor-pointer relative transition-all duration-300 ease-in-out ${
          viewMode === "grid" ? "bg-brand-secondary" : "bg-transparent"
        }`}
        onClick={() => setViewMode("grid")}
      >
        <div className="flex">
          {
            viewMode === "grid" && (
              <IoMdCheckmark size={19} />
            )
          }
          <MdOutlineGridView size={19} />
        </div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
