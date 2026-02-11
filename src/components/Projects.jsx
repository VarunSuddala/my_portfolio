import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Scalable Task Management API",
            description: "RESTful backend using FastAPI with JWT auth and RBAC. Dockerized and deployed with Nginx.",
            tags: ["FastAPI", "PostgreSQL", "Docker", "Nginx"],
            link: "#", // Add specific link if available
            image: "linear-gradient(135deg, #2b32b2 0%, #1488cc 100%)"
        },
        {
            title: "High-Performance URL Shortener",
            description: "URL shortening service with Redis caching to reduce DB queries and improve latency.",
            tags: ["Python", "Redis", "PostgreSQL"],
            link: "#",
            image: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)"
        },
        {
            title: "Auth & Authorization Service",
            description: "Secure auth system with password hashing, JWT access/refresh tokens, and OWASP security practices.",
            tags: ["Security", "JWT", "PyTest"],
            link: "#",
            image: "linear-gradient(135deg, #000428 0%, #004e92 100%)"
        }
    ];

    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Key Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div
                                className="project-image"
                                style={{ background: project.image }}
                            >
                                <div className="project-overlay">
                                    <a href={project.link} className="btn-view">View Code</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
