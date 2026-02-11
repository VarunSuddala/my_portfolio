import "./Skills.css";

const Skills = () => {
    const skills = [
        { name: "Python", category: "Language" },
        { name: "SQL", category: "Language" },
        { name: "FastAPI", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MongoDB", category: "Database" },
        { name: "Redis", category: "Caching" },
        { name: "Docker", category: "DevOps" },
        { name: "Git / GitHub", category: "Tools" },
        { name: "Linux", category: "OS" },
        { name: "AWS (EC2, S3)", category: "Cloud" },
        { name: "Nginx", category: "Server" },
    ];

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-category">{skill.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
