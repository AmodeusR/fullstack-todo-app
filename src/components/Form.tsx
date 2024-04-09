"use client";

import { addTodo } from "@/utils/actions";
import React, { useRef } from "react";
import Button from "./Button";

const Form = () => {
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
      <Button />
    </form>
  );
};

export default Form;
