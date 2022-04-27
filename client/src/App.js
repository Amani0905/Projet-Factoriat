import "./App.css";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route />
        <Route />
        <Route exact path='/Technoriat/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
