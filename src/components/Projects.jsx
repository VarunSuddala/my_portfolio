import { Github } from "lucide-react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Scalable Task Management API",
            description: "RESTful backend service using FastAPI with JWT authentication and Role-Based Access Control. Containerized using Docker and deployed behind an Nginx reverse proxy for high availability.",
            tags: ["FastAPI", "Python", "PostgreSQL", "Docker", "Nginx"],
            github: "https://github.com/varunsuddala",
        },
        {
            title: "High-Performance URL Shortener",
            description: "A robust URL shortening service leveraging Redis caching to drastically reduce database queries and improve read latency, built with security and rate-limiting best practices.",
            tags: ["Python", "Redis", "PostgreSQL", "API Design"],
            github: "https://github.com/varunsuddala",
        },
        {
            title: "Auth & Authorization Service",
            description: "Secure, decoupled authentication microservice featuring password hashing, JWT access/refresh token rotation, and strict OWASP security guidelines.",
            tags: ["Security", "JWT", "PyTest", "OAuth2"],
            github: "https://github.com/varunsuddala",
        }
    ];

    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-footer">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                    <Github size={18} />
                                    <span>View Source</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
