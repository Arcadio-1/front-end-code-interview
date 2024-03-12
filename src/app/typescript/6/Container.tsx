"use client";
import axios from "axios";
import React, { useRef } from "react";

export const Container = () => {
  const abortRef = useRef<AbortController>();

  const btnHandler = async () => {
    if (abortRef.current) {
      abortRef.current.abort();
    }
    abortRef.current = new AbortController();
    setTimeout(async () => {
      try {
        const request = await axios.get("/api/book", {
          signal: abortRef.current!.signal,
        });
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };
  return (
    <div>
      <button onClick={btnHandler} className="successBtn">
        get books
      </button>
    </div>
  );
};
