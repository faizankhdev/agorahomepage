"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <div>
      <Header
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className="px-2 flex w-full">
        {isOpenSidebar && (
          <Sidebar className="w-[21%]" isOpenSidebar={isOpenSidebar} />
        )}
        <main className="lg:w-[79%] w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
