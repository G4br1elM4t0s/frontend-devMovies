import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/signin" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/adm" element={<Home />} />
        <Route path="/history" element={<Home />} />
      </Routes>
    </Router>
  );
}
