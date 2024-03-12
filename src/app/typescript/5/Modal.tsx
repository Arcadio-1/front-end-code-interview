"use client";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./modal/backdrop";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  children: ReactNode;
  selector?: string;
}

export const Modal = ({
  children,
  selector = "myPortal",
  isOpen,
  setIsOpen,
}: Props) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  return isOpen && ref.current
    ? createPortal(
        <>
          <Backdrop setIsOpen={setIsOpen} />
          <div
            data-state={isOpen ? "open" : "closed"}
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-gray-800 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"
          >
            {children}
          </div>
        </>,
        ref.current
      )
    : null;
};
