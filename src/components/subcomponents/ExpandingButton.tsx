import { useState } from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

type ExpandingButtonProps = {
  text: string;
  children: React.ReactNode;
};

const ExpandingButton: React.FC<ExpandingButtonProps> = ({
  text,
  children,
}: ExpandingButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {open ? (
        <div className="bg-indigo-400 border-2 border-indigo-500 hover:bg-indigo-500 text-white h-fit px-2 rounded-sm w-72 m-auto p-2">
          <button
            className="grid grid-cols-2 hover:cursor-pointer  items-center w-full"
            onClick={() => setOpen(false)}
          >
            <div className="flex justify-start">
              <p>{text}</p>
            </div>
            <div className="flex justify-end">
              <AiFillUpCircle />
            </div>
          </button>
          {children}
        </div>
      ) : (
        <button
          className="bg-indigo-400 border-2 border-indigo-500 hover:bg-indigo-500 text-white h-fit px-2 rounded-sm w-72 m-auto grid grid-cols-2 items-center hover:cursor-pointer p-2"
          onClick={() => setOpen(true)}
        >
          <div className="flex justify-start">
            <p>{text}</p>
          </div>
          <div className="flex justify-end">
            <AiFillDownCircle />
          </div>
        </button>
      )}
    </>
  );
};

export default ExpandingButton;
