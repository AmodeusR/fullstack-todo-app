import React from "react";
import Form from "./Form";
import Todos from "./Todos";
import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

const Main = async () => {
  const todos = await db.todo.findMany();


  return (
    <main className=" flex flex-col items-center max-w-screen-lg w-full">
      <h2 className="text-center text-2xl font-medium mb-4">O que você tem pra fazer?</h2>
      <Form />
      <Todos todos={todos} />
    </main>
  );
};

export default Main;
