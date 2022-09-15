import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  firstName: string;
  email: string;
  age: number;
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
});
//can do anything with yup, eg for password can do min/max length and can match strings to other strings
// password: yup.string().min(4).max(10).required,
// confirmPassword: yup.string().oneOf([yup.ref("password"), null])

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col  items-center">
        <input
          className="m-3 border-b-2 border-b-indigo-500 focus:outline-none focus:border-indigo-400 focus:shadow-xl focus:bg-slate-100 hover:bg-slate-100 active:border-b-indigo-400 text-slate-800"
          type="text"
          {...register("firstName")}
          placeholder="first name..."
        />
        {errors.firstName && (
          <p className=" text-rose-700 bg-rose-100 p-1">
            {errors.firstName?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col  items-center">
        <input
          className="m-3 border-b-2 border-b-indigo-500 focus:outline-none focus:border-indigo-400 focus:shadow-xl focus:bg-slate-100 hover:bg-slate-100 active:border-b-indigo-400 text-slate-800"
          type="text"
          {...register("email")}
          placeholder="email..."
        />
        {errors.email && (
          <p className=" text-rose-700 bg-rose-100 p-1">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col  items-center">
        <input
          className="m-3 border-b-2 border-b-indigo-500 focus:outline-none focus:border-indigo-400 focus:shadow-xl focus:bg-slate-100 hover:bg-slate-100 active:border-b-indigo-400 text-slate-800"
          type="text"
          {...register("age")}
          placeholder="age..."
        />
        {errors.age && (
          <p className=" text-rose-700 bg-rose-100 p-1 ">
            {errors.age && "age should be a positive integer"}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="px-3 m-3 bg-indigo-400 border-2 rounded-sm border-indigo-500 hover:bg-indigo-500"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
