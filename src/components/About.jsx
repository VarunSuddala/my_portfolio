import "./About.css";

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <div className="about-content">
                    <div className="about-text fade-in" style={{ animationDelay: "0.2s" }}>
                        <p>
                            Hi, I'm <span className="highlight">Varun Suddala</span>, a <span className="text-gradient">Backend & DevOps Engineer</span>.
                        </p>
                        <p>
                            I specialize in building reliable RESTful APIs, optimizing database performance, and designing architectures that scale. With a strong foundation in <span className="highlight">Python, PostgreSQL, and Docker</span>, I enjoy breaking down complex problems and writing clean, maintainable backend code.
                        </p>
                        <p>
                            My approach integrates a strong DevOps mindset. I actively work with <span className="highlight">Linux and AWS</span> to build streamlined CI/CD pipelines, containerize applications, and ensure deploying code is as efficient as writing it.
                        </p>

                        <div className="education mt-4">
                            <h3>Education</h3>
                            <p className="edu-item">
                                <strong>B.Tech in Computer Science</strong> <br />
                                SR University, Warangal (2024 – 2027)
                            </p>
                        </div>
                    </div>
                    <div className="about-image fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="image-wrapper">
                            <img src="profile.jpg" alt="Profile" className="profile-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
