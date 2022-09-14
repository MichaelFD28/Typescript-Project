type Props = {
  id: string;
  onChange: (e: any) => void;
  placeholder: string;
};

const InputText: React.FC<Props> = ({ id, onChange, placeholder }: Props) => {
  return (
    <input
      className="m-3 border-b-2 border-b-indigo-500 focus:outline-none focus:border-indigo-400 focus:shadow-xl focus:bg-slate-100 hover:bg-slate-100 active:border-b-indigo-400"
      type="input"
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputText;
