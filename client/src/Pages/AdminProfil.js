import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import "../styles/AdminProfil.css"
const AdminProfil = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // identifcation d'admin (exclusivement admin task) //
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);

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
    <div className="dashboard">
     
    <div className="container py-0">
    
        <div className="row">
          <div className="col-lg-12 p-4">
            <h1> <i className="fa fa-gauge fa-lg"></i> DASHBOARD</h1>
            <hr />
          </div>
        </div>
        <div className="welcome"><h1 style={{color:"black",fontSize:'24px'}}>Welcome Back Admin,your dashboard is ready!</h1>
        <p style={{color:"white",fontSize:'18px'}}>Great job,your affiliate job is ready to go!You can access to users, add, update, delete posts and update project status using this dashboard.</p></div>
        <div className="row dash">
        
          <div className="col-xs col-sm col-md col-lg p-2">
            <a className="text-decoration-none" href="/Technoriat/UsersList">
              <div className="card p-3 shadow bg-purple text-center border-0">
                <div className="card-body">
                  <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
                  <hr />
                  <p className="card-title lead">USERS</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs col-sm col-md col-lg p-2">
            <a className="text-decoration-none" href="/Technoriat/Dashbord">
              <div className="card p-3 shadow bg-purple text-center border-0">
                <div className="card-body">
                  <i className="fa fa-edit fa-2x" aria-hidden="true" />
                  <hr />
                  <p className="card-title lead">POSTS</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xs col-sm col-md col-lg p-2">
            <a className="text-decoration-none" href="#">
              <div className="card p-3 shadow bg-purple text-center border-0">
                <div className="card-body">
                  <i class="fa fa-bars-progress fa-2x"></i>
                  <hr />
                  <p className="card-title lead">PROJECTS</p>
                </div>
              </div>
            </a>
          </div>
        </div></div>
          </div>
    </div>
    
  );
};

export default AdminProfil;
