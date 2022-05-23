import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Resultspage from "./pages/resultspage";
import Businessdetails from "./pages/Businessdetails/Businessdetails";
import Businessregister from "./pages/Businessregister";
import Footer from "./components/Footer/Footer";
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
            <Route path="/Businessdetails/:profileId" element={<Businessdetails />}/>
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
