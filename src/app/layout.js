import "./globals.css";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import { Children } from "react";

const layout = ({ children }) => {
  return (
    <html>
      <body className=" bg-white">
        <Header />
        <div className="px-2 flex w-full">
          <Sidebar className="w-[21%]" />
          <main className="w-[79%]">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default layout;
