"use client";
import React from "react";
import useLocalStoage from "./useLocalStoage";

export const Container = () => {
  const [name, setName] = useLocalStoage("name", "");
  return (
    <div>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
