import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import landing from "./pages/Landing";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} />
      <Route path="/landing" element={<landing />}/>
    </Routes>
  );
};

export default App;
