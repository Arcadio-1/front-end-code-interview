"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Backdrop = ({ setIsOpen }: Props) => {
  return (
    <div
      className="fixed bg-gray-900 bg-opacity-45 w-dvw h-dvh backdrop-blur-[2px] z-10"
      onClick={() => {
        setIsOpen(false);
      }}
    ></div>
  );
};
