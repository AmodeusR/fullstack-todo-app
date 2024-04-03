"use server";

import { revalidatePath } from "next/cache"
import { db } from "./db";

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
