import "./About.css";

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <div className="about-content">
                    <div className="about-text fade-in" style={{ animationDelay: "0.2s" }}>
                        <p>
                            Hi, I'm <span className="highlight">Varun Suddala</span>. I am a Computer Science student
                            (B.Tech, 2024–2027) at <span className="highlight">SR University</span>, Warangal.
                        </p>
                        <p>
                            My journey involves a deep dive into <span className="text-gradient">backend development</span>.
                            I specialize in building RESTful APIs, managing databases, and ensuring system scalability.
                            I have hands-on experience with <span className="highlight">Python, PostgreSQL, and Docker</span>,
                            and I enjoy solving problems related to system design and security.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring cloud architectures (AWS), optimizing database queries,
                            or learning about strict DevOps practices to streamline deployment pipelines.
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
