import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" }); //onblur
  const onValid = (data) => {
    console.log(data);
  };
  console.log(watch());
  return (
    <form action="" onSubmit={handleSubmit(onValid)}>
      <input
        className={`${Boolean(
          errors.username.message
        )} ? border border-red-500`}
        {...register("username", {
          required: "유저네임은필수다",
          minLength: { message: "유저이름은 최소 5자임", value: 5 },
        })}
        type="text"
      />
      <input
        {...register("email", {
          required: "이메일필수다",
          validate: {
            notGmail: (value) =>
              value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          },
        })}
        type="email"
      />
      <input
        {...register("password", {
          required: "패스워드는필수다",
        })}
        type="password"
      />
    </form>
  );
};

export default Form;
