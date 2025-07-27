"use client";

import { RxOpenInNewWindow } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSidePanel } from "@/contexts/SidePanelContext";
import { IconContainer } from "..";

const RightSidebar = () => {
  const { activePanel, setActivePanel } = useSidePanel();

  if (!activePanel) return null;

  return (
    <div className="min-w-[320px] max-w-[220px] h-full overflow-visible bg-white rounded-[20px] px-0 py-[5px] mx-[8px] ml-[15px]">
      <div className="flex items-center justify-between px-[14px] py-[10px]">
        <div className="title">
          <p className="mb-[2px] text-[11px] uppercase tracking-[1px] opacity-70">
            {activePanel.h4}
          </p>
          <h4 className="m-0 text-[16px] font-normal">{activePanel.h2}</h4>
        </div>
        <ul className="flex gap-1">
          <li>
            <IconContainer>
              <IoIosSearch size={23} />
            </IconContainer>
          </li>
          <li>
            <IconContainer>
              <RxOpenInNewWindow size={23} />
            </IconContainer>
          </li>
          <li>
            <IconContainer onClick={() => setActivePanel(null)}>
              <IoClose size={23} />
            </IconContainer>
          </li>
        </ul>
      </div>
      <hr className="text-text-primary opacity-30 m-0" />
    </div>
  );
};

export default RightSidebar;
