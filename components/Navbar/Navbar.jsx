import Link from "next/link";
import Image from "next/image";
import { NavbarActions, SearchBar } from "@/components";

const Navbar = () => {
  return (
    <div className="navbar p-2 w-full relative flex">
      <div className="min-w-[238px] pr-7.5 h-[48px] ml-2">
        <Link href="/" className=" flex items-center top-0.5">
          <Image
            src="/imgs/Google-Drive-Logo.png"
            alt="logo"
            width={60}
            height={60}
            className="mb-1"
          />
          <span className="text-gray-3 text-[22px] top-[-1.5px] leading-[48px]">
            Drive
          </span>
        </Link>
      </div>
      <div className="flex items-center shrink grow basis-[100%] justify-end gap-3 align-middle h-full">
        <div className="max-w-[100%] w-full h-full shrink grow basis-auto pr-2.5">
          <SearchBar />
        </div>
        <div className="leading-0">
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
