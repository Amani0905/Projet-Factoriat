import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction } from "../actions/personActions";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isAuth, errors } = useSelector((state) => state.person);
  useEffect(() => {
    if (isAuth) nav("/Profil");
  }, [isAuth, nav]);
  const loginPerson = (data) => {
    dispatch(loginAction(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginPerson)}>
        <label>email</label>
        <input required type="email" {...register("email")}></input>
        <br />
        <label>passeword</label>
        <input required type="passeword" {...register("passeword")}></input>
        <br />
        {errors && <p>{errors}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;