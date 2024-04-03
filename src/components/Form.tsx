"use client";

import React, { useRef } from "react";

type FormType = {
  addTodo: (formData: FormData) => Promise<void>;
}

const Form = ({ addTodo }: FormType) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={async formData => {
      addTodo(formData);
      formRef.current?.reset();
    }} className="flex w-11/12 gap-1 mb-8">
      <input
        type="text"
        className="grow p-2 outline-none border-2 rounded text-sm focus:border-blue-400 transition-colors"
        name="description"
      />
      <button
        className="text-white font-medium bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 transition-colors focus:bg-blue-400 focus:outline-none"
      >
        Adicionar
      </button>
    </form>
  );
};

export default Form;
