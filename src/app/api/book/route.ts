import { prisma } from "@/lib/db/prisma";

export async function GET(request: Request) {
  try {
    const books = await prisma.books.findMany();
    if (books) {
      return Response.json({
        status: 200,
        data: books,
      });
    }
  } catch (error) {
    return Response.json({
      status: 501,
      data: [],
    });
  }
}
