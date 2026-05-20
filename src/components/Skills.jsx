import { Terminal, Database, Cloud, Code2, Binary, Cpu, Box, GitBranch, Network, Server, Layers } from "lucide-react";
import "./Skills.css";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages & Frameworks",
            skills: [
                { name: "Python", level: "Advanced", icon: <Code2 /> },
                { name: "FastAPI", level: "Advanced", icon: <Server /> },
                { name: "REST APIs", level: "Advanced", icon: <Network /> }
            ]
        },
        {
            title: "Databases & Caching",
            skills: [
                { name: "SQL", level: "Advanced", icon: <Database /> },
                { name: "PostgreSQL", level: "Advanced", icon: <Database /> },
                { name: "MongoDB", level: "Intermediate", icon: <Layers /> },
                { name: "Redis", level: "Intermediate", icon: <Box /> }
            ]
        },
        {
            title: "DevOps & Infrastructure",
            skills: [
                { name: "Docker", level: "Intermediate", icon: <Box /> },
                { name: "Linux", level: "Advanced", icon: <Terminal /> },
                { name: "AWS", level: "Intermediate", icon: <Cloud /> },
                { name: "CI/CD", level: "Intermediate", icon: <GitBranch /> }
            ]
        },
        {
            title: "Core Concepts",
            skills: [
                { name: "Data Structures", level: "Advanced", icon: <Binary /> },
                { name: "Algorithms", level: "Advanced", icon: <Cpu /> }
            ]
        }
    ];

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="header-line"></div>
                </div>
                
                <div className="skills-grid-container">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-cards-grid">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="modern-skill-card">
                                        <div className="skill-card-glow"></div>
                                        <div className="skill-card-content">
                                            <div className="skill-icon-wrapper">
                                                {skill.icon}
                                            </div>
                                            <div className="skill-details">
                                                <h4 className="skill-name">{skill.name}</h4>
                                                <span className="skill-level">{skill.level}</span>
                                            </div>
                                        </div>
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
