import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register as registerAction } from "../actions/personActions";

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const registernewperson = (data) => {
    dispatch(registerAction(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(registernewperson)}>
        <label>name</label>
        <input type="text" {...register("name")}></input> <br />
        <label>email</label>
        <input type="email" {...register("email")}></input>
        <br />
        <label>passeword</label>
        <input type="passeword" {...register("passeword")}></input>
        <br />
        <label>address</label>
        <input type="text" {...register("adress")}></input>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
