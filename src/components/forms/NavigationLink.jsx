import React from "react";
import Link from "next/link";
const NavigationLink = ({ item, inter }) => {
  const Icon = item.icon;

  return (
    <div className="rounded-xl text-left px-2 hover:bg-gray-200 py-1">
      <Link
        href={item.href}
        className={`${inter.className} flex items-center gap-2.5 text-[14px] tracking-tight`}
      >
        <Icon size={15} className="text-gray-500" />
        {item.label}
      </Link>
    </div>
    
  );
};

export default NavigationLink;
