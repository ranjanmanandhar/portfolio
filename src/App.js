import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
