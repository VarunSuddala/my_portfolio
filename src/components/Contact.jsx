import { useState, useRef } from "react";
import { Mail, Github, Linkedin, Send, XCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);
        setSuccess(false);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setIsSubmitting(false);
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSuccess(false), 5000);
            }, (err) => {
                console.error("EmailJS Error:", err?.text || err);
                setIsSubmitting(false);
                setError(true);
                setTimeout(() => setError(false), 5000);
            });
    };

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Get In Touch</h2>

                <div className="contact-grid">
                    <div className="contact-info fade-in" style={{ animationDelay: "0.2s" }}>
                        <p className="contact-text">
                            I'm currently looking for new opportunities in backend engineering and DevOps. Whether you have an open role, a project idea, or just want to connect—I'd love to hear from you.
                        </p>

                        <div className="reach-links">
                            <a href="mailto:varunsuddala446@gmail.com" className="reach-link">
                                <Mail size={20} /> varunsuddala446@gmail.com
                            </a>
                        </div>

                        <div className="social-links-small">
                            <a href="https://github.com/varunsuddala" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/varun-suddala-b28621268/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container fade-in" style={{ animationDelay: "0.4s" }}>
                        {success ? (
                            <div className="success-message">
                                <Send size={32} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out. I'll get back to you soon.</p>
                            </div>
                        ) : error ? (
                            <div className="success-message error-message">
                                <XCircle size={32} className="error-icon" style={{ color: '#ef4444', marginBottom: '1.5rem' }} />
                                <h3>Failed to send</h3>
                                <p>Please check your configuration or try emailing me directly.</p>
                            </div>
                        ) : (
                            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Hello Varun, I'd like to talk about..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
