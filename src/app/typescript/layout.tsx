import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid place-items-center h-dvh mx-2 ">
      <div className="bg-gray-700 rounded-lg p-3">{children}</div>
    </div>
  );
};
export default layout;
