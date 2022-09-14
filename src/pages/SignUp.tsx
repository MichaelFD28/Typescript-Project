import React from "react";
import Form from "../components/Form";

const SignUp: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full  px-4 text-center">
        <h1 className="font-bold text-3xl mb-4 hover:cursor-pointer">Form</h1>
        <Form />
      </div>
    </div>
  );
};

export default SignUp;
