import { headers } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  console.log(params.name);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    next: { revalidate: 1 },
    body: JSON.stringify({
      title: params.name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();

  return Response.json(data);
}
