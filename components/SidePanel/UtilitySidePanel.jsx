"use client";

import { FiPlus } from "react-icons/fi";
import { sidePanelIcons } from "@/constants";
import { useSidePanel } from "@/contexts/SidePanelContext";
import { IconContainer } from "@/components";

const UtilitySidePanel = () => {
  const { activePanel, setActivePanel } = useSidePanel();

  return (
    <div className="flex flex-col gap-[18px] justify-center w-full">
      {sidePanelIcons.map((icon) => (
        <div
          onClick={() => {
            if (activePanel?.id === icon.id) {
              setActivePanel(null);
            } else {
              setActivePanel(icon);
            }
          }}
          key={icon.id}
          className="cursor-pointer"
        >
          <IconContainer
            bgColor={
              icon.colorBackground === "blue"
                ? "var(--brand-blue)"
                : "var(--brand-yellow)"
            }
            opacity="var(--opacity-third)"
            isActive={activePanel?.id === icon.id}
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="w-[18px] h-[18px]"
            />
          </IconContainer>
        </div>
      ))}

      <div className="bg-[#d9d9d9a7] w-1/2 my-[15px] h-[1px] mx-auto" />

      <IconContainer>
        <FiPlus size={20} />
      </IconContainer>
    </div>
  );
};

export default UtilitySidePanel;
