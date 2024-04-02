import React from "react";
import Form from "./Form";
import Todos from "./Todos";
import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";

const Main = async () => {
  const todos = await db.todo.findMany();

  const addTodo = async (formData: FormData) => {
    "use server";
    
    const description = formData.get("description");
    await db.todo.create({
      data: {
        description: description as string
      }
    })

    revalidatePath("/todos");
  }


  return (
    <main className=" flex flex-col items-center max-w-screen-lg w-full">
      <h2 className="text-center text-2xl font-medium mb-4">O que você tem pra fazer?</h2>
      <Form addTodo={addTodo} />
      <Todos todos={todos} />
    </main>
  );
};

export default Main;
