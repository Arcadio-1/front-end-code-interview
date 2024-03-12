"use client";
import { useState } from "react";
import { Modal } from "./Modal";
interface Props {}

export const Container = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open
      </button>
      <Modal setIsOpen={setIsOpen} selector="myPortal" isOpen={isOpen}>
        <div className="">
          <div className="mb-2">
            <p>
              Lorem Ipsum is simply dummy text of the printing It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently
            </p>
          </div>
          <button
            className="bg-gray-900 px-8 py-1 rounded-lg"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            ok
          </button>
        </div>
      </Modal>
    </div>
  );
};
