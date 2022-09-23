import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

type ExpandingButtonProps = {
  open: boolean;
  handleOpen: () => void;
  text: string;
  children: React.ReactNode;
};

//TODO make flex box with varying size divs?

const ExpandingButton: React.FC<ExpandingButtonProps> = ({
  open,
  handleOpen,
  text,
  children,
}: ExpandingButtonProps) => {
  return (
    <>
      {open ? (
        <div className=" bg-blue-300 border-2 border-blue-900 hover:bg-blue-400 text-black h-fit px-2 rounded-sm w-fit m-auto p-2">
          <button
            className="grid grid-cols-2 hover:cursor-pointer  items-center w-full"
            onClick={handleOpen}
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
          className="bg-blue-300 border-2 border-blue-900 hover:bg-blue-400 text-black h-fit px-2 rounded-sm w-72 m-auto grid grid-cols-2 items-center hover:cursor-pointer p-2"
          onClick={handleOpen}
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
