import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/history" element={<Home />} />
      </Routes>
    </Router>
  );
}
