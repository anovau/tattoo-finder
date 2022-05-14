import Header from "./components/Header";
import Home from "./components/Home";
import Resultspage from "./pages/resultspage";
import Businessprofile from "./pages/Businessprofile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultspage" element={<Resultspage />} />
        <Route path="/Businessprofile/:profileId" element={<Businessprofile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
