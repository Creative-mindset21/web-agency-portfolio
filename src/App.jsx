import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Header from "./components/Header";
import FlyerDesign from "./components/FlyerDesign";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flyers" element={<FlyerDesign />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
