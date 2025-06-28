import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <div className="section-wrapper">
          <Hero />
        </div>
        <div className="section-wrapper">
          <About />
        </div>
        <div className="section-wrapper">
          <Skills />
        </div>
        <div className="section-wrapper">
          <Education />
        </div>
        <div className="section-wrapper">
          <Projects />
        </div>
        <div className="section-wrapper">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App; 