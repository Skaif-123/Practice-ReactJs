import { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");

  const handleSab = (event) => {
    const {value}=event.target;
    setName(value);
  };

  return (
    <>
      <h1>Form</h1>
      <input
        type="text"
        name="hello"
        id="hello"
        value={name}
        className="text-center border-2 border-amber-400 "
        onChange={handleSab}
      />
    </>
  );
};

export default FormHandling;
