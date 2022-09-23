import clsx from "clsx";

type Props = {
  className?: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  min?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputText: React.FC<Props> = ({
  className,
  id,
  type,
  min,
  onChange,
  placeholder,
}: Props) => {
  return (
    <input
      className={clsx(
        "m-2 border-b-2 px-2 border-b-indigo-500 focus:outline-none focus:border-indigo-400 focus:shadow-xl focus:bg-slate-100 hover:bg-slate-100 active:border-b-indigo-400 dark:hover:bg-slate-200 text-slate-900",
        className
      )}
      type={type}
      min={min}
      id={id}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    />
  );
};

export default InputText;
