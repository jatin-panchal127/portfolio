import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
