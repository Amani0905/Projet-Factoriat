import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerAction } from "../actions/personActions";

const Register = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isAuth } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (isAuth) nav("/Login");
  // }, [isAuth, nav]);
  const registernewperson = (data) => {
    dispatch(registerAction(data, nav));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(registernewperson)}>
        <label>name</label>
        <input required type="text" {...register("name")}></input> <br />
        <label>email</label>
        <input required type="email" {...register("email")}></input>
        <br />
        <label>passeword</label>
        <input required type="password" {...register("password")}></input>
        <br />
        <label>address</label>
        <input required type="text" {...register("address")}></input>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
