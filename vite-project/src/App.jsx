import './App.css'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import TechnicalSkills from './Components/TechnicalSkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="technicalskills" element={<TechnicalSkills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contactForm" element={<ContactForm />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <Home />
      <About />
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
