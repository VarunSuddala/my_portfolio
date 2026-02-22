import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="nav-content container">
                <a href="#" className="logo">
                    Varun<span className="dot">.</span>
                </a>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#problem-solving">Algorithms</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact" className="btn-contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
