import { Mail, Github, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="contact-content fade-in">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm always open to discussing backend engineering roles, system design challenges, or new opportunities. Let's connect!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:varunsuddala446@gmail.com" className="contact-link-card">
                            <Mail size={24} />
                            <span>Email Me</span>
                        </a>
                        <a href="https://github.com/varunsuddala" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/varun-suddala-b28621268/" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                            <Linkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
