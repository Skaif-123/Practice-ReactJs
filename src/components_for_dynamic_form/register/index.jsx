import { useState } from "react";
import Common_form from "../common-form";
import { RegistrationFormElements } from "../config";

const initialRegisterFormData = {
  userName: "",
  email: "",
  password: "",
};

const RegisterPageComponent = () => {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData,
  );

  const onHandleRegister = () => {
    setRegisterFormData(initialRegisterFormData);
  };
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold">Sign Up Form Data</h1>
        <Common_form
          formControls={RegistrationFormElements}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          buttonText="Register"
          onHandleSubmit={onHandleRegister}
        />
      </div>
    </>
  );
};

export default RegisterPageComponent;
