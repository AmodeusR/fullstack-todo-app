import React from "react";
import type { Todo } from "@prisma/client";
import { Edit, Trash } from "react-feather";

export type TodoType = Pick<Todo, "id" | "description">;

const Todo = ({ description }: TodoType) => {
  return (
    <li className="flex justify-between items-center flex-grow text-pretty p-2">
      <input type="text" defaultValue={description} className="p-1 w-full bg-transparent" disabled />
      <span className="flex gap-4">
        <Edit size={20} className="hover:text-blue-400 transition-colors cursor-pointer" />
        <Trash size={20} className="hover:text-red-400 transition-colors cursor-pointer" />
      </span>
    </li>
  );
};

export default Todo;
