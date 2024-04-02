import React from "react";
import Todo, { TodoType } from "./Todo";


type Todos = {
  todos: TodoType[];
};
const Todos = ({ todos }: Todos) => {
  return (
    <ul className="w-11/12 flex flex-col">
      {todos.map(todo => <Todo key={todo.id} id={todo.id} description={todo.description} />)}
    </ul>
  );
};

export default Todos;