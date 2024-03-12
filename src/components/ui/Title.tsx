import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
}

const Title = ({ className, children, ...props }: Props) => {
  return (
    <div className="border-b-2 mb-2 pb-1 border-b-gray-500">
      <h1
        {...props}
        className={cn(`capitalize text-green-500 font-bold`, className)}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
