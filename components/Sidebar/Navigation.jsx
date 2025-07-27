"use client";

import { sidebarList } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <nav className="max-h-full mr-1.5">
      <ul className="ml-4 mr-2.5">
        {sidebarList.map((item) => (
          <li className="" key={item.id}>
            <Link
              href="/"
              className={`${
                activeItem === item.id
                  ? "bg-brand-secondary"
                  : "hover-overlay-bg"
              } ${
                item.spaceTop && "mt-4"
              } px-[8px] flex items-center gap-3.5 relative
              rounded-4 h-8 overflow-hidden`}
              onClick={() => setActiveItem(item.id)}
            >
              <div className="flex items-center text-text-primary opacity-90">
                <span className="w-3 flex-center">
                  <IoMdArrowDropright
                    size={12}
                    className={`${item.visibileArrow ? "block" : "hidden"}`}
                  />
                </span>
                <span className="relative w-5 h-5">
                  <span
                    className={`absolute top-0 left-0 transition-opacity duration-250 ${
                      activeItem === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.activeIcon}
                  </span>

                  <span
                    className={`absolute top-0 left-0 transition-opacity duration-250 ${
                      activeItem !== item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.notActiveIcon}
                  </span>
                </span>
              </div>
              <div className="leading-4 text-sm text-text-primary opacity-90">
                {item.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
