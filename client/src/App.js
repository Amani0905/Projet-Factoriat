import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profil from "./Pages/Profil"
import Equipe from "./Pages/Equipe";
import Dashbordposts from "./Pages/Dashbordposts";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/Technoriat/equipe' element={<Equipe/>}/>
        <Route path='/Technoriat/contact' element={<Contact/>}/>
        <Route path="/Technoriat/Register" element={<Register />} />
        <Route path="/Technoriat/Login" element={<Login />} />
        {/* <Route element={<ProtectedRoute />}/> */}
        <Route path="/Technoriat/Profil" element={<Profil />} />
        <Route path="/Technoriat/Dashbord" element={<Dashbordposts />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
