"use client";
import React, { FormEvent, useRef, useState } from "react";

export const Container = () => {
  const [deepClone, setDeepClone] = useState<object>();
  const [error, setError] = useState<string>("");
  //this object shuden't set to state but it's just to show the result of a deep clone
  const [personObject, setPersonObject] = useState({
    name: "john",
    lastName: "doe",
    wife: { name: "jane", lastName: "doe", age: 23 },
    kids: ["mag", "max", "sara"],
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeWifeName = (newName: string): void => {
    setPersonObject((prev) => {
      return { ...prev, wife: { ...prev.wife, name: newName } };
    });
  };
  const changeWifeNameHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      setError("you should enter name!");
    } else {
      setError("");
      changeWifeName(inputRef.current.value);
    }
  };

  const genrateDeepClone = <T,>(obj: T): T => {
    if (typeof obj !== "object") {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => {
        return genrateDeepClone(item);
      }) as T;
    }
    return { ...obj };
  };

  const generateHandler = () => {
    setDeepClone((prev) => {
      return (prev = genrateDeepClone(personObject));
    });
  };

  return (
    <div className="flex gap-4 flex-col">
      <input className="input" type="text" placeholder="testing" />
      <div>
        <label className="capitalize">original Object: </label>
        <span data-testid="org-obj" className="px-2 py-1 tracking-[2rem">
          {JSON.stringify(personObject)}
        </span>
      </div>
      <div className="">
        <label className="capitalize">cloned Object: </label>
        <span data-testid="clone-obj" className="px-2 py-1 tracking-[2rem">
          {JSON.stringify(deepClone)}
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button onClick={generateHandler} className="successBtn">
          generate deep clone
        </button>
        <form className="flex gap-2 flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="wife-name">wife name</label>
            <input
              id="wife-name"
              ref={inputRef}
              className="input"
              type="text"
              placeholder="new wife name"
            />
            {error && <p>{error}</p>}
          </div>
          <button
            type="submit"
            onClick={changeWifeNameHandler}
            className="successBtn"
          >
            change wife name
          </button>
        </form>
      </div>
    </div>
  );
};
