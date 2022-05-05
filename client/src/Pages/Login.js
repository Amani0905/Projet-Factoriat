import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction } from "../actions/personActions";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isAuth, errors } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) nav("/Technoriat/Profil");
  }, [isAuth, nav]);
  const loginPerson = (data) => {
    dispatch(loginAction(data, nav));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginPerson)}>
        <label>email</label>
        <input required type="email" {...register("email")}></input>
        <br />
        <label>passeword</label>
        <input required type="password" {...register("password")}></input>
        <br />
        {errors && <p>{errors}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
