import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import { useEffect, randomNumber } from "react";
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
    <div style={{paddingTop:'50px'}}>
      <div className="nav-side-menu">
        <div className="brand">
          <img
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          />
        </div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        />
        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              <a href="/Technoriat/AdminProfil">
                <i className="fa-solid fa-gauge fa-lg"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="/Technoriat/Dashbord">
                <i className="fas fa-user-tie fa-lg" />
                Posts
              </a>
            </li>
            <li>
              <a href="/Technoriat/UsersList">
                <i className="fa fa-users fa-lg" /> &nbsp;Users
              </a>
            </li>
            <li>
              <a>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
                &nbsp;<button onClick={logout}>&nbsp;Logout</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="dboard"
        style={{ width: "75%", marginLeft: "20%", marginTop: "40px" }}
      >
        <Link to="/Technoriat/AdminProfil">
          <button
            className="btn btn-dark"
            style={{ fontWeight: "bold", marginLeft: "24px" }}
          >
            &#8249; BACK
          </button>
        </Link>
      </div>
      {/* on va afficher que les utilisateurs mais pas les admins :  */}
      <div style={{ marginTop: "100px" }} className="dashboard bag">
        
            <>
              <div className="table-responsive">
              <table
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)",marginBottom:'0px'  }}
                className="table table-dark"
              >
                <thead>
                  <tr style={{ color: "#ffc80a",paddingRight:'0px',paddingLeft:'0',textAlign:'center'}}>
                    <th style={{minWidth:'150px',paddingRight:'0px'}}scope="col">NAME</th>
                    <th style={{minWidth:'200px',paddingLeft:'0px',paddingRight:'0px'}}scope="col">EMAIL</th>
                    <th style={{minWidth:'160px',paddingLeft:'0px',paddingRight:'0px'}}scope="col">PROJECT STATUS</th>
                    <th style={{minWidth:'200px',paddingLeft:'0px',paddingRight:'0px'}}scope="col">TITLE</th>
                    <th style={{minWidth:'100px',paddingLeft:'0px',paddingRight:'0px'}}scope="col">FILE</th>
                    <th style={{minWidth:'150px',paddingLeft:'0px',paddingRight:'0px'}}scope="col">PHONE</th>
                    <th style={{minWidth:'150px',paddingLeft:'0px',paddingRight:'20px'}}scope="col">EDIT STATUS</th>
                  </tr>
                </thead>
                </table>
                </div>
                
                </>    
                    {clientList.map((el) =>
          el.role === "user" ? (
            <>
            <tbody className="table-responsive" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
            <tr style={{ marginTop:'0px',height:'60px',verticalAlign:'center'}}>
                      <td style={{ color: "#ffc80a",minWidth:'170px',paddingLeft: "10px"}}>{el.name}</td>
                      <td style={{ color: "white",minWidth:'220px'}}>{el.email}</td>
                      <td style={{ color: "white",minWidth:'160px'}}>{el.project}</td>
                      <td style={{ color: "white",minWidth:'200px'}}>{el.titre}</td>
                      <td style={{ color: "white",minWidth:'130px'}}>
                        <a style={{color:'white'}}href={el.fichier}>Download File</a>
                      </td>
                      <td style={{ color: "white",minWidth:'130px'}}>{el.phone}</td>
                      
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => updateclient(el)}
                        style={{ fontWeight: "bold",marginTop:'15px' }}
                      >
                        UPDATE 
                      </button>
                      
                    </tr>
                </tbody>
             
            </>
          ) : null
        )}
      </div>
    </div>
  );
};

export default UsersList;
