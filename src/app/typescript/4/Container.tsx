"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Container = () => {
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState();
  const [isAborted, setIsaborted] = useState(false);
  // const [isAborted, setIsaborted] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    if (inputText) {
      setTimeout(async () => {
        try {
          const response = await axios.get(`/api/test/${inputText}`, {
            signal: controler!.signal,
          });
          console.log(response);
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
          }
        }
      }, 1000);
    }
    return () => {
      controler.abort();
    };
  }, [inputText]);

  return (
    <div className="flex gap-2">
      <input
        placeholder="enter text"
        className="input"
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button className="successBtn">get data</button>
    </div>
  );
};
