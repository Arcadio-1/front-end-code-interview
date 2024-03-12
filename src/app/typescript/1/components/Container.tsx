"use client";
import React, { FormEvent, useRef, useState } from "react";

export const Container = () => {
  const [result, setResult] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const firstSolution = (e: FormEvent): void => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const { value } = inputRef.current;

      let maxCount = 0;
      let maxChar = "";

      const map = new Map<string, number>();

      for (const char of value) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
      }
      for (const [char, count] of map.entries()) {
        if (count > maxCount) {
          maxChar = char;
          maxCount = count;
        }
      }
      setResult((prev) => {
        return (prev = maxChar);
      });
    }
  };

  const secondSolution = (e: FormEvent): void => {
    e.preventDefault();
    if (inputRef.current?.value) {
      const { value } = inputRef.current;
      let maxChar = "";
      let maxCount = 0;

      for (const char of value) {
        let count = 0;
        for (const charr of value) {
          if (char === charr) {
            count++;
          }
        }
        if (count > maxCount) {
          maxCount = count;
          maxChar = char;
        }
      }
      setResult((prev) => {
        return (prev = maxChar);
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <form className="flex gap-2 flex-wrap">
        <input
          data-testid="inputer"
          required
          className="input"
          ref={inputRef}
          type="text"
          placeholder="enter string"
        />
        <div className="flex gap-2">
          <button
            onClick={firstSolution}
            className="bg-success px-4 py-1 rounded-lg capitalize"
          >
            first solution
          </button>
          <button
            onClick={secondSolution}
            className="bg-success px-4 py-1 rounded-lg capitalize"
          >
            second solution
          </button>
        </div>
      </form>
      <div className="border-2 border-gray-600 p-4 flex">
        <label>result:</label>
        <p data-testid="result">{result}</p>
      </div>
    </div>
  );
};
