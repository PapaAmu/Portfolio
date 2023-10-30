import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./Projects";
import Contact from "./Contact";
import ContactForm from "./ContactForm";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    My Portfolio
                </Link>
                <div className="menu-icon" onClick={toggleNavbar}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/home" className="nav-links" onClick={toggleNavbar}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={toggleNavbar}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/technicalskills"
                            className="nav-links"
                            onClick={toggleNavbar}
                        >
                            Technical Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={toggleNavbar}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={toggleNavbar}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;