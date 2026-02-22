import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProblemSolving />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
