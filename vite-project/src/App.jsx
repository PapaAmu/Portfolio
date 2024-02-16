import './App.css'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import TechnicalSkills from './Components/TechnicalSkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
     <Route path="/" element={<Home />} />
        <Route path="/TechnicalSkills" element={TechnicalSkills} />
        <Route path="/Projects" element={Projects} />
        <Route path="/Contact" element={Contact} />
    </Route>
  )
)

function App() {
  return (
    <>
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
