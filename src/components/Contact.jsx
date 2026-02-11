import { Mail, Github, Linkedin, Code } from "lucide-react";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="contact-content fade-in">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href="mailto:hello@example.com" className="btn btn-primary contact-btn">
                        <Mail className="btn-icon" size={20} />
                        Say Hello
                    </a>

                    <div className="social-links">
                        <a href="https://github.com/varunsuddala" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/varun-suddala-b28621268/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://leetcode.com/u/EzwDsgpzVX/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Code size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
