import './App.css'
import './index.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import TechnicalSkills from './Components/TechnicalSkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ContactForm from './Components/ContactForm';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className='App'>
       <BrowserRouter> 
    <Routes>
      <Navbar />
      <Route path='/' element={<Navbar />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/technicalskills' element={<TechnicalSkills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/contactform' element={<ContactForm />} />
    </Routes>
     </BrowserRouter>
    < Footer/>
    </div>
  )
}

export default App
