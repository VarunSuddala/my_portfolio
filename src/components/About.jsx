import "./About.css";

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <div className="about-content">
                    <div className="about-text fade-in" style={{ animationDelay: "0.2s" }}>
                        <p>
                            Hi, I'm <span className="highlight">Varun Suddala</span>, a Software Engineer focusing on <span className="text-gradient">Backend & DevOps</span>.
                        </p>
                        <p>
                            I specialize in building reliable, scalable systems with clear architecture. With a strong foundation in <span className="highlight">Python, REST APIs, PostgreSQL, and Data Structures</span>, I focus on solving complex engineering problems through clean, maintainable code.
                        </p>
                        <p>
                            My approach integrates a strong DevOps mindset. I leverage <span className="highlight">Docker, Linux, and AWS</span> to build streamlined CI/CD pipelines, containerize architectures, and bridge the gap between development and operations.
                        </p>

                        <div className="education mt-4">
                            <h3>Education</h3>
                            <p className="edu-item">
                                <strong>B.Tech in Computer Science</strong> <br />
                                SR University, Warangal (2024 – 2027)
                            </p>
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
