import "./Hero.css";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name">Varun Suddala</h1>
                    <h2 className="hero-role">Software Engineer | Backend & DevOps</h2>
                    <p className="hero-tagline">
                        Building scalable systems and robust APIs with Python, Docker, AWS, and strong Data Structures fundamentals.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-glow">
                            View Projects
                        </a>
                        <a href="public/Varun_Suddala_Backend_Intern.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact
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
