import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Technologies from "./pages/Technologies.jsx";
import Benefits from "./pages/Benefits.jsx";
import Challenges from "./pages/Challenges.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Router>
  );
}
