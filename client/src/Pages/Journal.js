import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";

const Journal = () => {
  const dispatch = useDispatch();

  // Affichage des posts : //
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { postList, loading } = useSelector((state) => state.post);
  


  return (
    <div>
      {postList.map((el) => (
        <>
          <h4>{el.title}</h4>
          <h6>{el.shorttext}</h6>
          <h6>{el.date}</h6>
          {/* <h8>{el.content}</h8> */}
          {/* <h8>{el.image}</h8>  */}
        </>
      ))}
    </div>
  );
};

export default Journal;
