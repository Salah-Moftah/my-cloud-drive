import { IoMdArrowDropdown } from "react-icons/io";

const FilterDropdown = ({ name }) => {
  return (
    <div
      className="flex items-center mt-1 gap-[12px] border border-gray-3 max-w-full h-8
      rounded-2 px-[13px] text-gray-3 cursor-pointer relative hover-overlay-bg overflow-hidden"
    >
      <div className="text-[16px] font-medium">{name}</div>
      <IoMdArrowDropdown size={18} />
    </div>
  );
};

export default FilterDropdown;

