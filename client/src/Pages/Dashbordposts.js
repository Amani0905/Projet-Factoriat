import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import { deletePost, getPosts } from "../actions/postsActions";

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
  const { postList, loading } = useSelector((state) => state.post);

  // Supprimer des posts : //
  const delpost = (postId) => {
    dispatch(deletePost(postId));
  };

  // identifcation d'admin (exclusivement admin task) //
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);

  return (
    <div>
      {postList.map((el) => (
        <>
          <h4>{el.title}</h4>
          <h6>{el.shorttext}</h6>
          {/* <h8>{el.content}</h8> */}
          {/* <h8>{el.image}</h8> */}
          <button
            onClick={() => delpost(el._id)}
            style={{ fontWeight: "bold", backgroundColor: "#f7867e" }}
          >
            Supprimer
          </button>
        </>
      ))}
      <br />
      <br />
      <button
        onClick={logout}
        style={{ fontWeight: "bold", backgroundColor: "#f7867e" }}
      >
        LOGOUT
      </button>
      <br />
      <Link to="/Technoriat/Dashbord/Addnewpost">
        <button style={{ fontWeight: "bold", backgroundColor: "#adf2c2" }}>
          Ajouter une nouvelle publication
        </button>
      </Link>
    </div>
  );
};

export default Dashbordposts;
