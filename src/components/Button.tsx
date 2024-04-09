"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={cn("text-white font-medium bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 transition-colors focus:bg-blue-400 focus:outline-none", {
        "bg-slate-600": pending,
        "pointer-events-none": pending
      })}
    >
      {pending ? "Adicionando..." : "Adicionar"}
    </button>
  );
};

export default Button;
