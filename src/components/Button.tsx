"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="text-white font-medium bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 transition-colors focus:bg-blue-400 focus:outline-none"
    >
      {pending ? "Adicionando..." : "Adicionar"}
    </button>
  );
};

export default Button;
