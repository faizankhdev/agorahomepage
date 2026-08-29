import { AttachIcon, UploadIcon } from "@/constant/svg";
import { Plus, Paperclip, ArrowUp } from "lucide-react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Popup } from "../Popup";
import { Menubars } from "../forms/Menubars";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center mt-16.5 h-[420px] sm:px-8 md:px-10 lg:px-47">
      <h1 className="font-['Sentient'] text-[34px] tracking-tighter font-extralight text-[#848787]">
        Search for products, stores, and brands
      </h1>

      <div className="w-full h-28 border border-gray-300 py-2 px-2 shadow-xl mt-5.5 rounded-2xl">
        <input
          type="text"
          placeholder="What are you shopping for"
          className="w-full py-1 pl-2 outline-none text-lg text-gray-700 font-medium text-[16px] font-['Inter']"
        />

        <div className="w-full h-12 flex items-center justify-between mt-5">
          <div className="flex items-center justify-center gap-4">
            <Menubars
              children={
                <Plus
                  size={30}
                  className="border border-gray-200 text-gray-500 p-1 rounded-full cursor-pointer"
                />
              }
            />
            <label className="cursor-pointer">
              <AttachIcon size={25} className="text-gray-500" />

              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="border border-gray-300 cursor-pointer text-gray-500 mr-2 p-1.5 bg-[#c8fa95] rounded-full">
            <UploadIcon size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
