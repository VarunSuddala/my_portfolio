import "./Hero.css";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name">Varun Suddala</h1>
                    <h2 className="hero-role">Backend Developer</h2>
                    <p className="hero-tagline">
                        Architecting scalable systems and high-performance APIs.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-glow">
                            View Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
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
