import clsx from "clsx";

type ButtonProps = {
  type: "submit" | "button" | "reset" | undefined;
  text: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  active,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "px-3 m-3 bg-indigo-400 border-2 rounded-sm border-indigo-500 hover:bg-indigo-500",
        active && "bg-indigo-500 border-indigo-600 p-1"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
