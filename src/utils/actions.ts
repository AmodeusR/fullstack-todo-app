"use server";

import { revalidatePath } from "next/cache"
import { db } from "./db";

export const addTodo = async (formData: FormData) => {
  "use server";
  
  // Simulates delay
  // await new Promise(resolve => setTimeout(resolve, 2000));

  const description = formData.get("description");
  await db.todo.create({
    data: {
      description: description as string
    }
  })

  revalidatePath("/todos");
}

export const updateTodo = async (id: string, updatedText: string) => {
  await db.todo.update({
    where: {
      id
    },
    data: {
      description: updatedText
    }
  })

  revalidatePath("/todos");
}

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: {
      id
    }
  });

  revalidatePath("/todos");
}
