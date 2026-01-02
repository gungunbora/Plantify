import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     </Route>
    </Routes>
  );
};

export default App;
