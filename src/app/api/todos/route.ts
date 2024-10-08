import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  const todos = await prisma.todo.findMany()

  return NextResponse.json({todos})
}

// I created this route to practice API route creation with NextJS, but using NextJS's Server Actions is easier and more practical