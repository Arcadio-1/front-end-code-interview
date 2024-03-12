"use client";
import React, { useCallback, useState } from "react";

const useLocalStoage = <T extends string, U>(
  key: T,
  initialValue: U
): [storedValue: U, setValue: (val: U) => void] => {
  const getLocalStorage = () => {
    try {
      if (typeof window === undefined) {
        return initialValue;
      }
      const localStorager = localStorage.getItem(key);
      return localStorager ? JSON.parse(localStorager) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<U>(() => {
    try {
      return getLocalStorage() || initialValue;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      return initialValue;
    }
  });

  const setValue = useCallback(
    (val: U) => {
      try {
        if (typeof window === undefined) {
          throw new Error("we are not in browser");
        }
        localStorage.setItem(key, JSON.stringify(val));
        setStoredValue(val);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    },
    [key]
  );

  return [storedValue, setValue];
};

export default useLocalStoage;
