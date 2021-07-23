/** @format */
import { useForm } from "react-hook-form";
import React from "react";
import "./SignUp.css";

export default function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="singUp-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" name="email" useRef={register} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          useRef={register}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
