import { useState } from "react";
import { Button } from "../ui/button";



const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSab1 = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleSab2 = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  function hanndleSubmit(event) {
    event.preventDefault()
    console.log(name, email);

  }
  return (
    <>
      <h1>Form</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <form onSubmit={hanndleSubmit}>

          <input
            type="text"
            name="hello"
            id="hello"
            value={name}
            className="text-center border-2 border-amber-400 "
            onChange={handleSab1}
            placeholder={'Enter your name'}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className="text-center border-2 border-amber-400 "
            onChange={handleSab2}
            placeholder={'Enter your email ID'}
          />
          <Button type="submit">Click here</Button>
        </form>
      </div>
    </>
  );
};

export default FormHandling;
