'use client';

import { useDropdown } from "@/contexts/DropdownMenuContext";
import { IoMdAdd } from "react-icons/io";

const NewAddButton = () => {
  const { toggleDropdown } = useDropdown();
  return (
    <div onClick={toggleDropdown} className="max-w-[256px] pt-[8px] px-[16px] pb-[16px] text-text-primary">
      <div
        className="before-overlay-hover before:bg-brand-tint flex items-center relative px-[18px] pr-[20px] pl-[16px]
        gap-[10px] h-[56px] w-[100px] shadow-1 hover:shadow-2 duration-[.08s] ease-linear transition-shadow bg-white rounded-4 cursor-pointer"
      >
        <span>
          <IoMdAdd size={24} className="font-medium" />
        </span>
        <div className="text-sm font-medium">New</div>
      </div>
    </div>
  );
};

export default NewAddButton;
