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
                <h2 className="section-title fade-in">Have a project or role in mind? Let's talk.</h2>

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
                            <a href="https://leetcode.com/u/EzwDsgpzVX/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.156-.702-1.843s.235-1.376.702-1.843l4.313-4.344c.467-.467 1.111-.662 1.823-.662s1.357.195 1.824.662l2.706 2.617c.189.197.181.515-.015.704l-1.138 1.13c-.188.188-.492.193-.681.011l-1.74-1.682c-.126-.12-.296-.188-.475-.188-.179 0-.349.068-.474.188l-3.321 3.344c-.114.116-.176.273-.176.43s.062.314.176.43l3.332 3.355c.125.12.295.188.474.188.179 0 .349-.068.475-.188l1.731-1.672c.189-.182.493-.177.681.011l1.138 1.13c.196.189.204.507.015.704zM20.12 10.425v2.857c0 .26-.205.474-.468.474h-6.73c-.263 0-.468-.214-.468-.474v-2.857c0-.26.205-.474.468-.474h6.73c.263 0 .468.214.468.474z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container fade-in" style={{ animationDelay: "0.4s" }}>
                        {success ? (
                            <div className="success-message">
                                <Send size={32} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out. Varun will- get back to you soon.</p>
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
                                        placeholder="Name"
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
                                        placeholder="Email"
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
