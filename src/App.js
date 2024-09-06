// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NGOList from "./components/NGOList";
import AddNGO from "./components/AddNGO";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NGOList />} />
        <Route path="/add" element={<AddNGO />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

