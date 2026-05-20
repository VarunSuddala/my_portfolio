import "./About.css";

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <div className="about-content">
                    <div className="about-text fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="profile-photo-container">
                            <img src="/profile.jpg" alt="Varun Suddala" className="profile-photo" />
                        </div>
                        <p className="bio-text">
                            Hi, I'm <span className="highlight">Varun Suddala</span>, a Software Engineer specializing in <a href="#projects" className="backend-link">Backend & DevOps</a>. I build reliable, scalable systems and robust APIs using <span className="highlight">Python, PostgreSQL, and AWS</span> — bridging the gap between engineering and operations.
                        </p>

                        <div className="trait-badges">
                            <span className="trait-badge">Scalable Systems</span>
                            <span className="trait-badge">DevOps Mindset</span>
                            <span className="trait-badge">Clean Architecture</span>
                        </div>

                        <div className="education">
                            <div className="edu-entry">
                                <h4 className="edu-title">B.Tech in Computer Science Engineering</h4>
                                <div className="edu-inst">SR University, Warangal, Telangana</div>
                                <div className="edu-meta">(2024 – 2027) • CGPA: 7.2/10</div>
                            </div>
                            <div className="edu-entry">
                                <h4 className="edu-title">Diploma in Electronics and Communication</h4>
                                <div className="edu-inst">Vaagdevi Engineering College, Warangal</div>
                                <div className="edu-meta">(2021 – 2024) • CGPA: 8.1/10</div>
                            </div>
                            <div className="edu-entry">
                                <h4 className="edu-title">SSC / 10th Standard</h4>
                                <div className="edu-inst">Saketha High School, Hanamkonda</div>
                                <div className="edu-meta">(2020 – 2021)</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-visual fade-in" style={{ animationDelay: "0.4s" }}>
                        <div className="code-window">
                            <div className="code-header">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <pre className="code-body">
                                <code>
<span className="kw">class</span> <span className="fn">SystemArchitect</span>:{"\n"}
{"    "}<span className="kw">def</span> <span className="fn">__init__</span>(<span className="kw">self</span>):{"\n"}
{"        "}<span className="kw">self</span>.skills = [<span className="str">"Python"</span>, <span className="str">"Docker"</span>, <span className="str">"AWS"</span>]{"\n"}
{"        "}<span className="kw">self</span>.focus = <span className="str">"Scalability"</span>{"\n"}
{"\n"}
{"    "}<span className="kw">def</span> <span className="fn">build</span>(<span className="kw">self</span>, problem):{"\n"}
{"        "}solution = optimize(problem){"\n"}
{"        "}<span className="kw">return</span> <span className="kw">self</span>.deploy(solution){"\n"}
{"\n"}
{"    "}<span className="kw">def</span> <span className="fn">deploy</span>(<span className="kw">self</span>, robust_code):{"\n"}
{"        "}<span className="kw">return</span> <span className="str">"System running smoothly -&gt; 200 OK"</span>
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
