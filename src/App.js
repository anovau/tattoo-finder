import Header from "./components/Header";
import Home from "./components/Home";
import Resultspage from "./pages/resultspage";
import Businessprofile from "./pages/Businessprofile";
import Businessregister from "./pages/Businessregister";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/Authcontext";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resultspage" element={<Resultspage />} />
            <Route path="/Businessprofile/:profileId" element={<Businessprofile />}/>
            <Route path="/Business-register" element={<PrivateRoute ><Businessregister /></PrivateRoute>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
