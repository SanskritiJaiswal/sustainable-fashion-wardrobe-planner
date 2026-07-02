import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Wardrobe from "./pages/Wardrobe";
import Planner from "./pages/Planner";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/wardrobe" element={<Wardrobe />} />

        <Route path="/planner" element={<Planner />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
