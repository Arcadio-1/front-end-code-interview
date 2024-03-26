import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        {children}
      </main>
    </>
  );
};
export default layout;
