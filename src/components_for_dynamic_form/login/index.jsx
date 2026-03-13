import { useState } from "react";
import Common_form from "../common-form";
import { LoginFormElements } from "../config";

const initialLoginFormData={
    email: "",
    password: "",
  }

const LoginPageComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);


  const onHandlingLogin = (event) => {
    event.preventDefault();

    // API LOGIC AND DTABSE CONNECTION
   setLoginFormData(initialLoginFormData)
  };
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold">Sign In Form Data</h1>
        <Common_form
          formControls={LoginFormElements}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText="Login"
          onHandleSubmit={onHandlingLogin}
        />
      </div>
    </>
  );
};

export default LoginPageComponent;
