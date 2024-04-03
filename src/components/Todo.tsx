"use client";

import React, { useRef, useState } from "react";
import type { Todo } from "@prisma/client";
import { Edit, Trash, Check } from "react-feather";
import { deleteTodo, updateTodo } from "@/utils/actions";

export type TodoType = Pick<Todo, "id" | "description">;

const Todo = ({ id, description }: TodoType) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updatedText, setUpdatedText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    setUpdatedText(description);
    if (updatedText.length <= 0) {
      alert("O texto precisa ter mais de um caractere!");
      return;
    }

    updateTodo(id, updatedText);
    setUpdatedText("");
    setIsEditOpen(false);
  };

  return (
    <li className="flex justify-between items-center flex-grow text-pretty p-2 hover:bg-slate-50 rounded transition-colors">
      <input
        ref={inputRef}
        type="text"
        className="p-1 w-full bg-transparent"
        disabled={!isEditOpen}
        value={updatedText || description}
        onChange={(e) => setUpdatedText(e.target.value)}
      />
      <span className="flex gap-4">
        {isEditOpen ? (
          <button type="button" onClick={handleUpdate}>
            <Check className="hover:text-green-400 transition-colors" />
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setIsEditOpen(true);
                setTimeout(() => inputRef.current?.focus(), 0);
              }}
              className="hover:text-blue-400 transition-colors"
            >
              <Edit size={20} />
            </button>
            <button
              type="button"
              className="hover:text-red-400 transition-colors"
              onClick={() => deleteTodo(id)}
            >
              <Trash size={20} />
            </button>
          </>
        )}
      </span>
    </li>
  );
};

export default Todo;
