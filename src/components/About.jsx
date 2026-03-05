import "./About.css";

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <div className="about-content">
                    <div className="about-text fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="about-bio-container">
                            <div className="profile-photo-placeholder">
                                <img src="/profile.jpg" alt="Varun Suddala" className="profile-photo" />
                            </div>
                            <div className="about-bio">
                                <p>
                                    Hi, I'm <span className="highlight">Varun Suddala</span>, a Software Engineer specializing in <span className="text-gradient">Backend & DevOps</span>. I build reliable, scalable systems and robust APIs using <span className="highlight">Python, PostgreSQL, and AWS</span> — bridging the gap between engineering and operations.
                                </p>

                                <div className="trait-badges">
                                    <span className="trait-badge">⚡ Scalable Systems</span>
                                    <span className="trait-badge">🐳 DevOps Mindset</span>
                                    <span className="trait-badge">🔧 Clean Architecture</span>
                                </div>

                                <div className="education mt-4">
                                    <h3>Education</h3>
                                    <p className="edu-item">
                                        <strong>B.Tech in Computer Science</strong> <br />
                                        SR University, Warangal (2024 – 2027)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="code-window">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <pre className="code-body">
                                <code>
                                    {`class SystemArchitect:
    def __init__(self):
        self.skills = ["Python", "Docker", "AWS"]
        self.focus = "Scalability"

    def build(self, problem):
        solution = optimize(problem)
        return self.deploy(solution)

    def deploy(self, robust_code):
        return "System running smoothly -> 200 OK"`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
