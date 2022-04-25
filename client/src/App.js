import "./App.css";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import NavbarTest from "./Components/NavbarTest";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarTest/>
      <Routes>
        <Route exact path='/Technoriat/contact' element={<Contact/>}/>
        <Route />
        <Route/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
