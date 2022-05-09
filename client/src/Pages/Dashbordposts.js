import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import { getPosts } from "../actions/postsActions";

const Dashbordposts = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // Affichage des posts : //
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
   const {postList,loading} = useSelector((state) => state.post);

  // identifcation d'admin (exclusivement admin task) //
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);

  return (
    <div>
      {postList.map((el)=>(
        <>
        <h4>{el.title}</h4>
        <h6>{el.shorttext}</h6>
        {/* <h8>{el.content}</h8> */}
        {/* <h8>{el.image}</h8> */}
        </>
      ))}
      <button onClick={logout}>LOGOUT</button><br/>
      <Link to='/Technoriat/Dashbord/Addnewpost'>Ajouter une nouvelle publication</Link>
    </div>
  );
};

export default Dashbordposts;
