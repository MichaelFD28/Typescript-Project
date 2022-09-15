import React, { useState } from "react";
import InputField from "../components/InputField";
import TodoList from "../components/TodoList";
import { Todo } from "../model";

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center dark:bg-slate-800 dark:text-white">
      <div className="w-full  px-4 text-center">
        <h1 className="font-bold text-3xl mb-4 hover:cursor-pointer">ToDos</h1>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todos;
