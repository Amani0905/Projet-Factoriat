import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route />
        <Route exact path='/Technoriat/equipe' element={<Team/>}/>
        <Route exact path='/Technoriat/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
