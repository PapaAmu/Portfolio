import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>   
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      <li>
      <Link to="/Home" className="hover:text-blue-500 transition-colors">
          Home
        </Link>
      </li>
      <li>
      <Link to="/about" className="hover:text-blue-500 transition-colors">
          About
        </Link>
      </li>
      <li>
      <Link to="/TechnicalSkills" className="hover:text-blue-500 transition-colors">
          Skills
        </Link>
      </li>
      <li>
      <Link to="/Projects" className="hover:text-blue-500 transition-colors">
          Projects
        </Link>
      </li>
      <li>
      <Link to="/Contact" className="hover:text-blue-500 transition-colors">
          Contact
        </Link>
      </li>  
    </ul>
    </div>
  );
}
 
export default Navbar ();