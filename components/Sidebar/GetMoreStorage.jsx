import Link from "next/link";
import { BaseButton } from "@/components";

const GetMoreStorage = () => {
  return (
    <div className="ml-[34px] pt-[8] mb-3">
      <div className="max-w-[175px]">
        <div className="w-full mb-2 rounded-[3px] relative overflow-hidden h-[4px] bg-gray-2">
          <div
            className="absolute rounded-[3px] top-0 left-0 h-full bg-brand-primary "
            style={{ width: "30%" }}
          />
        </div>
        <Link href="/" className="">
          <div className="text-gray-3 text-[14.7px]">
            <span>4.47 GB </span>
            of 15 GB used
          </div>
        </Link>
        <div className="mt-3">
          <BaseButton name="Get more storage" bgHover='bg-brand-primary' />
        </div>
      </div>
    </div>
  );
};

export default GetMoreStorage;
