"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { popupData } from "@/constant/popupData";
import { PopupTrigerData } from "@/constant/PopupTriggerData";
import { Search } from "lucide-react";

export function Menubars({ children }) {
  return (
    <Menubar className="border-0 hover:bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-transparent">
          {children}
        </MenubarTrigger>
        <MenubarContent side="top" className="w-50 bg-white">
          <MenubarGroup>
            {popupData.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i}>
                  <MenubarItem className="font-['inter'] cursor-pointer text-[17px] tracking-tight">
                    <Icon />
                    {item.heading}
                  </MenubarItem>
                </div>
              );
            })}
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            {PopupTrigerData.map((item, index) => (
              <MenubarSub key={index}>
                <MenubarSubTrigger className="cursor-pointer">
                  {item.MainText}
                </MenubarSubTrigger>

                <MenubarSubContent>
                  {item.type === "nested"
                    ? // Category
                      item.children.map((child, i) => (
                        <MenubarSub key={i}>
                          <MenubarSubTrigger className="cursor-pointer">
                            {child.name}
                          </MenubarSubTrigger>

                          <MenubarSubContent>
                            {child.children.map((subChild, j) => (
                              <MenubarItem key={j} className="cursor-pointer">
                                {subChild}
                              </MenubarItem>
                            ))}
                          </MenubarSubContent>
                        </MenubarSub>
                      ))
                    : // Price, Rating, Sort by
                      item.children.map((child, i) => (
                        <MenubarItem key={i} className="cursor-pointer">
                          {child}
                        </MenubarItem>
                      ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarGroup>

          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
