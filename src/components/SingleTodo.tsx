import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="md:w-1/2 sm:w-full p-4 space-y-6">
      {todos.map((todo) => (
        <form key={todo.id}>
          <div className="m-3 py-2 bg-indigo-400 rounded-md grid grid-cols-3 gap-2 ">
            {todo.isDone ? (
              <s className=" col-span-2 flex justify-start items-baseline p-3">
                {todo.todo}
              </s>
            ) : (
              <div className=" col-span-2 flex justify-start items-baseline p-3">
                {todo.todo}
              </div>
            )}

            <div className=" col-span-1 flex justify-end items-baseline p-3">
              <span className="basis-1/2 hover:cursor-pointer">
                <AiFillDelete onClick={() => handleDelete(todo.id)} />
              </span>
              <span className="basis-1/2 hover:cursor-pointer">
                <MdDone onClick={() => handleDone(todo.id)} />
              </span>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default SingleTodo;
