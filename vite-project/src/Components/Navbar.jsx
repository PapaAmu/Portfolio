import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

 function NavList() {
  return (
    <ul className="flex flex-row gap-7 justify-end ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/Home" className="hover:text-blue-500 transition-colors">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/about" className="hover:text-blue-500 transition-colors">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/TechnicalSkills" className="hover:text-blue-500 transition-colors">
          TechnicalSkills
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/Projects" className="hover:text-blue-500 transition-colors">
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/Contact" className="hover:text-blue-500 transition-colors">
          Contact
        </Link>
      </Typography>
    </ul>
  );
}

export default  function  NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto px-6 py-3 max-w-full mb-16">
      <div className="flex items-center justify-between text-indigo-500">
        <Typography
          as="a"
          href="#"
          variant="h2"
          className="mr-4 cursor-pointer py-1.5"
        >
         h.
        </Typography>

       
        <NavList />
      </div>
    </Navbar>
  );
}
