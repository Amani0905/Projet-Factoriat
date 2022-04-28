import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profil from "./Pages/Profil"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route  path='/Technoriat/equipe' element={<Team/>}/>
        <Route  path='/Technoriat/contact' element={<Contact/>}/>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoute />}/>
        <Route path="/Profil" element={<Profil />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
