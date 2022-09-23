type DropdownProps = {
  label?: string;
  id: string;
  options: string[];
  multiple?: boolean;
  onClick: (e: React.SyntheticEvent<HTMLOptionElement, Event>) => void;
};

// set state of something as selected
// show visually selected state

const Dropdown: React.FC<DropdownProps> = ({
  label,
  id,
  options,
  multiple = false,
  onClick,
}: DropdownProps) => {
  //create array from passed options
  //truthy falsy, base selected state on truthy falsy?
  //se;lected, change height of selection box?

  return (
    <>
      <label className="px-2">{label}</label>
      <select
        id={id}
        size={2}
        className="m-2 border-b-2 px-2 border-b-indigo-500"
      >
        {options.map((op, index) => (
          <option
            className=" focus:outline-none  focus:bg-slate-100 hover:bg-slate-100  dark:hover:bg-slate-200 text-slate-900"
            value={op}
            key={index}
            onClick={(e) => onClick(e)}
          >
            {op}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
