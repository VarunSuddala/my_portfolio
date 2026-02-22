import "./Skills.css";

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend",
            skills: ["Python", "REST APIs", "FastAPI"]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Redis", "SQL"]
        },
        {
            title: "DevOps",
            skills: ["Docker", "Linux", "Git / GitHub", "Nginx", "CI/CD"]
        },
        {
            title: "Cloud",
            skills: ["AWS (EC2, S3)"]
        },
        {
            title: "Testing",
            skills: ["PyTest", "Postman"]
        }
    ];

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Technical Skills</h2>
                <div className="skills-container">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category-block fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="skill-card">
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
