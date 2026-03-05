import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Scalable Task Management API",
            description: "RESTful backend service using FastAPI with JWT authentication and Role-Based Access Control. Containerized using Docker and deployed behind an Nginx reverse proxy for high availability.",
            metric: "Handles 1k+ concurrent requests with <50ms latency",
            tags: ["FastAPI", "Python", "PostgreSQL", "Docker", "Nginx"],
            github: "https://github.com/varunsuddala",
            demo: "#",
            image: "/task_api.png"
        },
        {
            title: "High-Performance URL Shortener",
            description: "A robust URL shortening service leveraging Redis caching to drastically reduce database queries and improve read latency, built with security and rate-limiting best practices.",
            metric: "Reduced DB load by 80% using Redis caching layer",
            tags: ["Python", "Redis", "PostgreSQL", "API Design"],
            github: "https://github.com/varunsuddala",
            demo: "#",
            image: "/url_shortener.png"
        },
        {
            title: "Auth & Authorization Service",
            description: "Secure, decoupled authentication microservice featuring password hashing, JWT access/refresh token rotation, and strict OWASP security guidelines.",
            metric: "Implemented OAuth2 compliant token rotation system",
            tags: ["Security", "JWT", "PyTest", "OAuth2"],
            github: "https://github.com/varunsuddala",
            demo: "#",
            image: "/auth_service.png"
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
                            <div className="project-thumbnail-wrapper">
                                <img src={project.image} alt={project.title} className="project-thumbnail" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <p className="project-metric">🚀 {project.metric}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-footer">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                                    <Github size={18} />
                                    <span>Source</span>
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
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
