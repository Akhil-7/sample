import "./App.css";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ColorsContext from "./Contexts/ColorsContext";
function App() {
  var colors = {
    darkGrey: "#29335c",
    lightGrey: "#d6df5a",
  };
  return (
    <ColorsContext.Provider value={{ colors }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>

        <Footer />
      </Router>
    </ColorsContext.Provider>
  );
}

export default App;
