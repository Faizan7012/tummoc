import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login";
import Signup from "./Signup";


export const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
  );
};
