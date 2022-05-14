import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerAction } from "../actions/personActions";

const Register = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);
  const registernewperson = (data) => {
    dispatch(registerAction(data, nav));
  };
  return (
    <div className="vid-container">
      <div className="inner-container">
    <body className="login">
      <form className="box-1" onSubmit={handleSubmit(registernewperson)}>
      <h1 style={{backgroundColor:'#ffc80a',color:'rgba(0, 0, 0, 0.7)',fontWeight:'bold'}}>S'INSCRIRE & POSTULER</h1>
        <input className="Log" required placeholder="Nom & Prénom" type="text" {...register("name")}></input>
        <input className="Log" required placeholder="Adresse" type="text" {...register("address")}></input>
        <input className="Log" required placeholder="Email" type="email" {...register("email")}></input>
        <input className="Log" required placeholder="Mot de passe" type="password" {...register("password")}></input>
        <button className="btn btn-warning btn-sm " style={{width:'300px',marginLeft:'50px',fontSize:'16px',fontWeight:'bold'}}>Register & Submit</button><br/>
        <Link to="/Technoriat/Login">
        <p  style={{backgroundColor:'rgba(0, 0, 0, 0.7)',marginTop:'10px',paddingTop:'1px',paddingBottom:'5px',fontSize:'16px',fontWeight:'600'}}>Je suis déjà enregistré(e)</p>
       </Link>
      </form>
      </body>
    </div>
    </div>
  );
};

export default Register;
