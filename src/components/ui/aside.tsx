"use client";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuIcon from "./MenuIcon";
export const Aside = () => {
  const codes = [
    {
      id: "0",
      label: "typescript",
      url: "/typescript",
      challenges: [
        {
          id: "1",
          title: "find the most frequent character in a string and return it",
        },
        {
          id: "2",
          title: "deep clone of object",
        },
        {
          id: "3",
          title: "custom hook async with localStorage",
        },
        {
          id: "4",
          title: "request with aboat fetch to routHandler",
        },
        {
          id: "5",
          title: "Creating a modal with createPortal",
        },
        {
          id: "6",
          title: "doing something",
        },
      ],
    },
    {
      id: "2",
      label: "react",
      url: "/react",
      challenges: [
        {
          id: "1",
          title: "create counter",
        },
      ],
    },
  ];

  return (
    <aside className="text-light_2 absolute">
      <Sheet>
        <SheetTrigger asChild>
          <div>
            <MenuIcon className="h-12 w-12 fill-green-600" />
          </div>
        </SheetTrigger>
        <SheetContent
          className="flex w-full flex-col gap-6 rounded-lg pt-[5rem] shadow-lg bg-gray-900"
          side={"left"}
        >
          <Tabs
            className=" flex h-full items-stretch gap-6"
            defaultValue={codes[0].id}
          >
            <TabsList className="flex h-full flex-col justify-start gap-2 p-0 bg-gray-900 pr-1 border-r-2 border-r-slate-600">
              {codes.map((tec) => {
                return (
                  <TabsTrigger
                    key={tec.id}
                    value={tec.id}
                    className={`w-full border-b-[3px] duration-0`}
                  >
                    <span className="text-light_2 text-xl capitalize">
                      {tec.label}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {codes.map((tec) => {
              return (
                <TabsContent className="w-full" key={tec.id} value={tec.id}>
                  <div className="flex flex-col">
                    {tec.challenges.map((challenge) => {
                      return (
                        <SheetClose key={challenge.id} asChild>
                          <Link
                            className="border-2  border-transparent border-b-gray-600"
                            href={`${tec.url}/${challenge.id}`}
                          >
                            <span className="capitalize mb-auto text-center text-lg text-light_2">
                              {challenge.title}
                            </span>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </SheetContent>
      </Sheet>
    </aside>
  );
};
