import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        className="m-3 border-b-2 border-b-indigo-500 focus:outline-none focus:border-indigo-400 focus:shadow-xl focus:bg-slate-100 hover:bg-slate-200 active:border-b-indigo-400 text-slate-800"
        type="input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter a task"
      />
      <button
        className="px-3 m-3 bg-indigo-400 border-2 rounded-sm border-indigo-500 hover:bg-indigo-500"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
