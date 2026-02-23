import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
                <a href="#" className="logo" onClick={closeMobileMenu}>
                    Varun<span className="dot">.</span>
                </a>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                    <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#problem-solving" onClick={closeMobileMenu}>Algorithms</a></li>
                    <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#contact" className="btn-contact" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
