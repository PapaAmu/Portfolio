import {useEffect} from 'react'
import './App.css'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import TechnicalSkills from './Components/TechnicalSkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
    
        <Route path="/" element={<Home />} />
        <Route path="/TechnicalSkills" element={TechnicalSkills} />
        <Route path="/Projects" element={Projects} />
        <Route path="/Contact" element={Contact} />
    </Route>
  )
)

function App() {
  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: true, // Only once animation
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

<RouterProvider
    router={router}
  />

export default App;