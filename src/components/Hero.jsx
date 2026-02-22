import "./Hero.css";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name">Varun Suddala</h1>
                    <h2 className="hero-role">Backend & DevOps Engineer</h2>
                    <p className="hero-tagline">
                        Architecting scalable systems and high-performance APIs with Python, Docker, and AWS.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-glow">
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
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
