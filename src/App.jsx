import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <Footer />
    </div>
  );
};

export default App;
