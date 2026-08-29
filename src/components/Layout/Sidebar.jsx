import { Inter } from "next/font/google";
import Image from "next/image";
import { images } from "../../constant/images";
import Link from "next/link";
import sidebarData, {
  navigation,
  collections,
  build,
} from "../../constant/sidebarData";
import NavigationLink from "../forms/NavigationLink";

const inter = Inter({
  subsets: ["latin"],
});
const Sidebar = ({ isOpenSidebar }) => {
  return (
    <div
      className="w-[21%] mt-15 bg-gray-100 shadow-xl border px-3 border-gray-200 h-[560px] rounded-xl hidden  lg:block"
    >
      <div className="border-b pb-4 border-b-gray-300 text-center ">
        <button
          className={`${inter.className} w-full bg-white mt-4 mb-2 border border-gray-200 font-bold hover:bg-gray-50 text-gray-700 rounded-4xl py-2 text-[12px]`}
        >
          New Search
        </button>
        <div className="flex flex-col  mt-[16px] ">
          {navigation.map((item, i) => {
            return <NavigationLink key={i} item={item} inter={inter} />;
          })}
          <h2 className="text-left font-medium text-[13px] font-['Inter'] mt-2.5 ml-1 text-gray-500">
            Collections
          </h2>
        </div>
        {collections.map((item, i) => {
          return <NavigationLink key={i} item={item} inter={inter} />;
        })}
        <h2 className="text-left font-medium text-[13px] font-['Inter'] mt-2.5 ml-1 text-gray-500">
          Build
        </h2>

        {build.map((item, i) => {
          return <NavigationLink key={i} item={item} inter={inter} />;
        })}
      </div>
      <h2 className="text-left font-medium text-[13px] font-['Inter'] mt-6 ml-1 text-gray-800 tracking-tight leading-0.5 ">
        Recent Chat
      </h2>
      <div className="border border-dashed border-gray-500 h-34 mt-4 p-2 rounded-xl flex-nowrap">
        <h2 className="text-left ml-0.5 text-[13px] text-gray-700">shoes</h2>
        <div className="flex gap-4 w-full overflow-x-auto mt-2">
          {images.map((item, i) => {
            return (
              <Image
                key={i}
                src={Object.values(item)[0]}
                width={30}
                height={20}
                alt="image2"
                className="w-12 mb-1.5 h-12 rounded-xl shrink-0"
              />
            );
          })}
        </div>
        <Link
          href=""
          className="text-left  ml-0.5 font-medium text-[13px] font-['Inter'] text-gray-700 cursor-pointer"
        >
          sign up to keep this chat
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
