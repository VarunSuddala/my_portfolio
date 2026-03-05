import "./Skills.css";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "SQL"]
        },
        {
            title: "Backend & Databases",
            skills: ["REST APIs", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            title: "DevOps & Cloud",
            skills: ["Docker", "Linux", "AWS (EC2, S3)", "CI/CD"]
        },
        {
            title: "Fundamentals",
            skills: ["Data Structures", "Algorithms"]
        }
    ];

    const highlightedSkills = ["Python", "FastAPI", "Docker", "AWS (EC2, S3)", "PostgreSQL"];

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Technical Skills</h2>
                <div className="skills-container">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category-block fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, index) => {
                                    const isHighlighted = highlightedSkills.includes(skill);
                                    return (
                                        <div key={index} className={`skill-card ${isHighlighted ? 'highlighted-skill' : ''}`}>
                                            <span className="skill-name">{skill}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
