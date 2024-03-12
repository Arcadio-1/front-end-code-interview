import { cn } from "@/lib/utils";
import React from "react";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const MenuIcon = ({ className }: Props) => {
  return (
    <svg
      className={cn("h-7 w-7 cursor-pointer fill-light_4", className)}
      viewBox="0 0 512 512"
    >
      <path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
      <path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
      <path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
    </svg>
  );
};

export default MenuIcon;
