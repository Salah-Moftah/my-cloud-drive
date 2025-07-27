import { IconContainer } from "@/components";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineOfflinePin } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import Image from "next/image";


const NavbarActions = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1 text-gray-3">
        <IconContainer outlineActive={true}>
          <MdOutlineOfflinePin size={24} />
        </IconContainer>
        <IconContainer outlineActive={true}>
          <AiOutlineQuestionCircle size={22} />
        </IconContainer>
        <IconContainer outlineActive={true}>
          <IoSettingsOutline size={22} />
        </IconContainer>
        <IconContainer outlineActive={true}>
          <RiGeminiFill size={22} />
        </IconContainer>
        <IconContainer opacity='var(--opacity-first)'>
          <IoApps size={21} />
        </IconContainer>
      </div>

      <div className="pl-1.5 px-0.5">
        <IconContainer opacity='var(--opacity-first)'>
          <div className="w-[30px] h-[30px] relative">
            <Image src="/imgs/avatar.png" sizes="32" alt="avatar" fill />
          </div>
        </IconContainer>
      </div>
    </div>
  );
};

export default NavbarActions;
