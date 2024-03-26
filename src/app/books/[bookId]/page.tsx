import React from "react";

const page = ({ params: { bookId } }: { params: { bookId: string } }) => {
  return <div>{bookId}C</div>;
};

export default page;
