import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.js";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminProtectedRoute from "./Components/AdminProtectedRoute";
import NotUserProtectedRoute from "./Components/NotUserProtectedRoute";
import Profil from "./Pages/Profil";
import Dashbordposts from "./Pages/Dashbordposts";
import TeamP from "./Pages/TeamP";
import Technoriat from "./Pages/Technoriat";
import FactoriatP from "./Pages/FactoriatP";
import Journal from "./Pages/Journal";
import Addnewpost from "./Pages/Addnewpost";
import JournalC from "./Components/JournalC";
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/Technoriat/Acceuil' element={<Home/>}/>
        <Route path='/Technoriat/Journal/description' element={<JournalC/>}/>
      <Route path='/Technoriat/Journal' element={<Journal/>}/>  
        <Route path='/Technoriat/Technoriat' element={<Technoriat/>}/>  
        <Route path='/Technoriat/equipe' element={<TeamP/>}/>
        <Route path='/Technoriat/Factoriat' element={<FactoriatP/>}/>  
        <Route path='/Technoriat/contact' element={<Contact/>}/>
        <Route element={<NotUserProtectedRoute />}>
          <Route path="/Technoriat/Register" element={<Register />} />
          <Route path="/Technoriat/Login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/Technoriat/Profil" element={<Profil />} />
        </Route>
        <Route element={<AdminProtectedRoute />}>
          <Route path="/Technoriat/Dashbord" element={<Dashbordposts />} />
          <Route
            path="/Technoriat/Dashbord/Addnewpost"
            element={<Addnewpost />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
