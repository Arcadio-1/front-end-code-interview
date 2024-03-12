import Title from "@/components/ui/Title";
import React from "react";
import { Container } from "./Container";

const page = async () => {
  const test = performance.measure("d");
  console.log(test);
  return (
    <div>
      <Title>example of using redux toolkit</Title>
      <Container />
    </div>
  );
};

export default page;
