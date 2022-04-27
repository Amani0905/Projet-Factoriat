import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
