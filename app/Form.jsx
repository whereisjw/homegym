import React, { useState } from "react";
import { useForm } from "react-hook-form";

// less code
// Better validation
// Better Erros (set,clear,display)
// Have control over inputs

const Form = () => {
  const { handleSubmit, setValue, register, watch } = useForm();
  const onValid = (data) => {};
  console.log(watch());
  return (
    <form action="" onSubmit={handleSubmit(onValid)}>
      <input {...register("username")} type="text" />
      <input {...register("email")} type="email" />
      <input {...register("password")} type="password" />
    </form>
  );
};

export default Form;
