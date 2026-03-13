
const CommonInput = ({
  label,
  name,
  type,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-[100px_1fr] p-2">
      <label htmlFor={name} className="">{label}</label>

      <input
      className="border-2 border-black rounded-sm text-center mr-2"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
