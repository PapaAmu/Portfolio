import {useEffect} from 'react'
import './App.css'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import TechnicalSkills from './Components/TechnicalSkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
    duration: 1000, 
    once: true, 
    });
    }, []);
  return (
    <>
      <Navbar />
      <Home />
      <TechnicalSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;