import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";
import "../styles/JournalT.css";

const JournalT = () => {
  const dispatch = useDispatch();

  // Affichage des posts : //
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { postList, loading } = useSelector((state) => state.post);

  return (
    <body>
      <div className="news">
        <h1
          style={{
            backgroundColor: "#ffc80a",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          ACTUALITES DES ACTIVITES TECHNORIATE
        </h1>

        {postList.map((el) => (
          <>
            <figure className="snip1529">
              <img src={require("../styles/img/article2.png")} alt="Article" />
              <div className="date">
                <span className="day">28</span>
                <span className="month">Apr</span>
              </div>
              <figcaption>
                <h3>{el.title}</h3>
                <p>{el.shorttext}</p> <br />
                <p>{el.date}</p>
              </figcaption>
              <div className="hover">
                <i className="ion-android-open" />
              </div>
              <a href="/Technoriat/Journal/description" />
            </figure>
            {/* <h8>{el.content}</h8> */}
            {/* <h8>{el.image}</h8>  */}
          </>
        ))}
        <h3
          style={{
            marginTop: 40,
            color: "white",
            fontSize: 16,
            marginBottom: 40,
            width: "80%",
          }}
        >
          A travers cette platforme,Technoriate souhaite soutenir les chercheurs
          entrepreneurs pour vulgariser leurs résultats de recherche, partager
          leurs succès et exprimer leurs opinions. Nous sommes convaincus que la
          Technoriatie peut prendre une meilleure place dans le développement de
          la Tunisie.
        </h3>
        <a
          style={{ marginTop: "10px", marginLeft: "0%" }}
          href="/Technoriat/contact"
          className=" btn btn-warning btn-sm  "
          role="button"
          ariaDisabled="true"
        >
          Contactez-nous
        </a>
      </div>
    </body>
  );
};

export default JournalT;
