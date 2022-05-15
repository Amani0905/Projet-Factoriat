import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import { useEffect,randomNumber } from "react";
import { getUsersList } from "../actions/userActions";


const UsersList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // Affichage des users : //
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);
  const { clientList, loading } = useSelector((state) => state.client);

  const updateclient = (client) => {
    // dispatch({type:'transfertdata',payload:client})
    nav(`/Technoriat/UsersList/UpdateClient/${client._id}`);
    localStorage.setItem("clientInfo", JSON.stringify(client));
  };

  return (
    <div>
    <div className="nav-side-menu">
  <div className="brand"><img
          className="logo-Technoriat"
          src={require("../styles/img/Logo Technoriat.png")}
          alt="Technoriat"
        /></div>
  <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
  <div className="menu-list">
    <ul id="menu-content" className="menu-content collapse out">
      <li>
        <a href="/Technoriat/AdminProfil">
        <i className="fa-solid fa-gauge fa-lg"></i> Dashboard
        </a>
      </li>
      <li>
        <a href="/Technoriat/Dashbord">
          <i className="fas fa-user-tie fa-lg" />Posts
        </a>
      </li>
      <li>
        <a href="/Technoriat/UsersList">
          <i className="fa fa-users fa-lg" /> &nbsp;Users
        </a>
      </li>
      <li>
    <a><i className="fas fa-user-tie fa-lg" />&nbsp;<button
      onClick={logout}>
        &nbsp;Logout
    </button>
    </a>
        
      </li>
    </ul>
  </div>
  </div>
  <div className="dboard" style={{width:'75%',marginLeft: '20%',marginTop:'40px'}}>
  <Link to="/Technoriat/AdminProfil">
<button className="btn btn-dark" style={{ fontWeight: "bold",marginLeft:'24px'}}>
&#8249; BACK
</button>
</Link>
</div>
      {/* on va afficher que les utilisateurs mais pas les admins :  */}
      <div style={{marginTop:'100px'}} className="dashboard bag">
      {clientList.map((el) =>
        el.role === "user" ? (
          <>
          <div class="table-responsive"></div>
          <table style={{backgroundColor:'rgba(0, 0, 0, 0.7)'}} class="table table-dark">
  <thead>
    <tr style={{color:'#ffc80a'}}>
      
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PROJECT STATUS</th>
      <th scope="col">TITLE</th>
      <th scope="col">FILE</th>
      <th scope="col">PHONE</th>
      <th scope="col">EDIT STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{el.name}</td>
      <td>{el.email}</td>
      <td>{el.project}</td>
      <td>{el.titre}</td>
      <td>{el.fichier}</td>
      <td>{el.phone}</td>

      
      <button className="btn btn-info"
              onClick={() => updateclient(el)}
              style={{ fontWeight: "bold"}}
            >
              UPDATE STATUS
            </button>
      
    </tr>
    
    
  </tbody>
</table>
          
            
          </>
        ) : null
       
      )}
  
    </div>
    </div>
    
  );
};

export default UsersList;
