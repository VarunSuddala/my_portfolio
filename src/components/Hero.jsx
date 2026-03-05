import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import "./Hero.css";

const LeetCodeIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.156-.702-1.843s.235-1.376.702-1.843l4.313-4.344c.467-.467 1.111-.662 1.823-.662s1.357.195 1.824.662l2.706 2.617c.189.197.181.515-.015.704l-1.138 1.13c-.188.188-.492.193-.681.011l-1.74-1.682c-.126-.12-.296-.188-.475-.188-.179 0-.349.068-.474.188l-3.321 3.344c-.114.116-.176.273-.176.43s.062.314.176.43l3.332 3.355c.125.12.295.188.474.188.179 0 .349-.068.475-.188l1.731-1.672c.189-.182.493-.177.681.011l1.138 1.13c.196.189.204.507.015.704zM20.12 10.425v2.857c0 .26-.205.474-.468.474h-6.73c-.263 0-.468-.214-.468-.474v-2.857c0-.26.205-.474.468-.474h6.73c.263 0 .468.214.468.474z" />
    </svg>
);

const Hero = () => {
    const roles = ["Backend Engineer", "DevOps Enthusiast", "API Architect"];
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const delay = isDeleting && currentRole === "" ? 500 : (!isDeleting && currentRole === roles[roleIndex] ? 2000 : typeSpeed);

        const timeout = setTimeout(() => {
            if (!isDeleting && currentRole !== roles[roleIndex]) {
                setCurrentRole(roles[roleIndex].slice(0, currentRole.length + 1));
            } else if (isDeleting && currentRole !== "") {
                setCurrentRole(roles[roleIndex].slice(0, currentRole.length - 1));
            } else if (!isDeleting && currentRole === roles[roleIndex]) {
                setIsDeleting(true);
            } else if (isDeleting && currentRole === "") {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [currentRole, isDeleting, roleIndex]);

    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name">Varun Suddala</h1>
                    <h2 className="hero-role">
                        Software Engineer | <span className="typewriter text-gradient" style={{ display: "inline-block", minWidth: "180px", textAlign: "left" }}>{currentRole}</span><span className="blinking-cursor">|</span>
                    </h2>
                    <p className="hero-tagline">
                        Building scalable systems and robust APIs with Python, Docker, AWS, and strong Data Structures fundamentals.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-glow">
                            View Projects
                        </a>
                        <a href="/varunsuddala_resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact
                        </a>
                    </div>

                    <div className="hero-socials fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="https://github.com/varunsuddala" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/varun-suddala-b28621268/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://leetcode.com/u/user1485Qy/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <LeetCodeIcon size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
        </section>
    );
};

export default Hero;
