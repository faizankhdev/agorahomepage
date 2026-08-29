import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { Menu, ShoppingCart } from "lucide-react";
import { UserIcon } from "@/constant/svg";
import { DialogDemo } from "../forms/Dialog";

const inter = Inter({
  subsets: ["latin"],
});
const Header = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div
      className={`flex ${inter.className} justify-between fixed top-0 z-20  items-center w-full border-b border-b-gray-300 px-5 h-12`}
    >
      <div className=" flex relative gap-2 lg:gap-0">
        <Image
          className="cursor-pointer w-23 h-5 "
          src="/Logo.png"
          width={93}
          height={13.5}
          alt="Logo"
        />

        <div className="group hidden lg:block">
          <span
            className={`${inter.className} absolute top-2 left-23.5 text-[10px] font-bold cursor-pointer`}
          >
            PK
          </span>
          <p className="absolute top-5 left-0 w-80 rounded-xl text-xs mt-3 py-2 bg-gray-900 text-white px-2 hidden group-hover:block">
            Search is available in Pakistan. Purchasing and order fulfillment is
            coming soon.
          </p>
        </div>
        <div
          className="flex justify-center items-center border w-6 h-6 border-gray-900 p-1 rounded-full lg:hidden"
          onClick={() => {
            console.log("clicked");
            setIsOpenSidebar(!isOpenSidebar);
          }}
        >
          <Menu className="block lg:hidden size-4" />
        </div>
      </div>

      <div className="flex items-center gap-[7px]">
        <DialogDemo
          child={
            <button
              className={`${inter.className} bg-[#c8fa95] py-1 border hover:bg-[#b5e782] border-gray-400 rounded-2xl text-xs px-3 cursor-pointer`}
            >
              Sign up for free
            </button>
          }
        />
        <div className="border p-[6px] border-gray-300 rounded-full hidden lg:block">
          <ShoppingCart
            size={15}
            className="text-sm text-gray-500 cursor-pointer"
          />
        </div>
        <div className="border p-1 bg-gray-100 border-gray-300 rounded-full cursor-pointer hidden lg:block">
          <UserIcon size={15} className="text-sm text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
