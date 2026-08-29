"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Popup({ children }) {
  return (
    <>
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger
            render={
              <button type="button" className="cursor-pointer">
                {children}
              </button>
            }
          />
          <PopoverContent align="start" className="w-40" side="top">
            Aligned to start
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
